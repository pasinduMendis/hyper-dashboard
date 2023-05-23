import {
  Button,
  Card,
  Container,
  Grid,
  Loading,
  Text,
} from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import OverlayModel from '../../components/OverlayModel'
import { paymentService, personalPixelService } from '../../services'
import Cookies from 'js-cookie';

let scriptText = `
<script type="text/javascript" src="https://api.hypertarget.ai/"></script>
<script type="text/javascript">        
function onloadFunction(){     
        HYPERSNIPPET.initURL(["CODETOSITE","USERID"]);
    }
    window.onload = onloadFunction()
    document.onclick = function (event) {
        HYPERSNIPPET.analyzer(event,sessionStorage.getItem("key"),isLoadedForClick);
    }
    window.addEventListener("beforeunload", function (e) {
        e.preventDefault();
    })
</script>`

const PersonalPixel = ({ website, error,isVerified }) => {
  const [model, setModel] = useState({ isOpen: false, success: true })
  const [loading, setLoading] = useState(false)
  const [pageLoading, setPageLoading] = useState(true)
  const router = useRouter()
  const [session, setSession] = useState("");

  useEffect(() => {
    const user = Cookies.get('user')?JSON.parse(Cookies.get('user')):null;
    const accessToken = Cookies.get('accessToken')?Cookies.get('accessToken'):null;
    if (!user || !accessToken) {
      router.push('/auth/signIn')
    }
    else if ( user && accessToken && user.isSubscribed) {
      //console.log(session.user.isSubscribed)
      setSession({user,accessToken})
      if (isVerified) {
        router.push('/userJourneys/automaticallyTrack')
       //setPageLoading(false)
       }else if(!website.domain || website.domain==""){
         router.push('/personalPixel/getDomain')
       }else{
         setPageLoading(false)
       }
      //setLoading(false);
    } else if(user && accessToken){
      paymentService.isSubscribed({user,accessToken}).then((res)=>{
        //console.log(res)
        if(res.status==200 && res.isSubscribed==false){
          router.push('/pricing')
        }else{
          if (isVerified) {
            router.push('/userJourneys/automaticallyTrack')
           //setPageLoading(false)
           }else if(!website.domain || website.domain==""){
            router.push('/personalPixel/getDomain')
          }else{
             setPageLoading(false)
           }
          
        }
      })
      
    }else{
      setLoading(true)
    }
  }, [])

  const copyToClipbord = (siteCode) => {
    const codeToCopy = scriptText.replace('CODETOSITE', siteCode)
    const finalCode = codeToCopy.replace('USERID', session.user.id)
    navigator.clipboard.writeText(finalCode)
  }

  const renderPixelCode = (siteCode, userId) => {
    //console.log('PARANS ', userId)
    const codeToCopy = scriptText.replace('CODETOSITE', siteCode)
    const finalCode = codeToCopy.replace('USERID', userId)

    return finalCode
  }

  const onClickVerifyPixel = () => {
    setLoading(true)
    personalPixelService.verifyPixel(session, website.websiteId).then((res) => {
      if (res['verified']) {
        setModel({ isOpen: true, success: true })
      } else {
        setModel({ isOpen: true, success: false })
      }
      setLoading(false)
    })
  }
  error && console.log('Error ', error)
  //console.log('Website', website)
  return (
   <>{pageLoading?<></>:
    <div className='hyper-pixel'>
      <OverlayModel
        modelOpen={model.isOpen}
        closeHandler={() => setModel({ isOpen: false })}
        okHandler={() =>
          model.success
            ? router.push('/userJourneys/automaticallyTrack')
            : setModel({ isOpen: false })
        }
        imageUrl={
          model.success
            ? '/images/pixel-success-img.svg'
            : '/images/pixel-error-img.svg'
        }
        title={model.success ? 'Congratulations' : 'Verification Failed'}
        description={
          model.success
            ? 'Pixel was succesfully added.'
            : 'Error verifying Pixel!'
        }
      />
      <Header />
      <Container lg css={{ paddingTop: 100, margin: 'auto', width: '60%' }}>
        <Grid.Container>
          <Grid lg={12} md={12} sm={12} xs={12} justify='center'>
            <Card>
              <Card.Body css={{ padding: '10px 40px', height: '60vh' }}>
                <Text
                  h3
                  css={{ textAlign: 'center', color: 'var(--button_blue)' }}
                >
                  Add The Hypertarget Pixel To Your Site
                </Text>
                {/* <Textarea  minRows={10} disabled fullWidth placeholder="Loading pixel"
                                    value={website && website.websiteId ? renderPixelCode(website.websiteId, session && session.user.id) : 'Loading'}
                                /> */}
                <div className='pixeldispBox'>
                  {website && website.websiteId
                    ? renderPixelCode(
                        website.websiteId,
                        session && session.user.id
                      )
                    : 'Loading'}
                </div>
              </Card.Body>
              <Card.Footer>
                <Grid.Container gap={4}>
                  <Grid lg={3} md={3} sm={3} xs={0} />
                  <Grid lg={3} md={3} sm={3} xs={12} justify='center'>
                    <Button
                      disabled={loading}
                      className='hyper-btn hyper-btn1'
                      size='lg'
                      onPress={() => copyToClipbord(website.websiteId)}
                    >
                      Copy Code
                    </Button>
                  </Grid>
                  <Grid lg={3} md={3} sm={3} xs={12} justify='center'>
                    <Button
                      disabled={loading}
                      className='hyper-btn hyper-btn2'
                      size='lg'
                      onClick={() => onClickVerifyPixel()}
                    >
                      {loading ? (
                        <Loading color='success' />
                      ) : (
                        'Verify Installation'
                      )}
                    </Button>
                  </Grid>
                  <Grid lg={3} md={3} sm={3} xs={0} />
                  {error && error.length > 0 && (
                    <Grid lg={12} md={12} sm={12} xs={12} justify='center' css={{ textAlign: 'center', color: 'red' }}>
                      {error}
                    </Grid>
                  )}
                </Grid.Container>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
    </div>}
    </>
  )
}

export async function getServerSideProps(context) {
    const { req } = context;
    const cookies=req.headers.cookie?context.req.headers.cookie:null;
    const userCookie = cookies ? cookies.split(';').find(c => c.trim().startsWith('user=')) : null;
    const user = userCookie ? JSON.parse(decodeURIComponent(userCookie.split('=')[1])) : null;
    const accessTokenCookie = cookies ? cookies.split(';').find(c => c.trim().startsWith('accessToken=')) : null;
    const accessToken = accessTokenCookie ? accessTokenCookie.split('=')[1] : null;

  try {
    if (user && accessToken) {
      const session={user,accessToken}

      const websiteData = await personalPixelService.getPixel(session)
      //console.log('Website Data ', websiteData)
      if (!websiteData.error) {
        const alredyVerified=await personalPixelService.verifyPixel(session, websiteData.website.websiteId)
        console.log(alredyVerified)
        if(alredyVerified?.verified){
          return {
            props: {
              isVerified: alredyVerified?.verified,
              session: session,
            },
          }
        }
        return {
          props: {
            website: websiteData.website,
            session: session,
          },
        }
      } else {
        console.log('Running error')
        //router.push('/auth/signIn')
        return {
          props: {
            error: JSON.stringify({ message: 'User must be logged in' }),
          },
        }
      }
    } else {
      return {
        props: {
          error: JSON.stringify({ message: 'User must be logged in' }),
        },
      }
    }
  } catch (error) {
    return {
      props: {
        error: { error: JSON.stringify(error) },
      },
    }
  }
}

export default PersonalPixel
