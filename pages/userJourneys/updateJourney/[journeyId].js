import { Button, Container, Grid, Image, Loading, Text,Card } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../../components/Header"
import JourneyStep from "../../../components/JourneyStep";
import { websiteService, userJourneyService, paymentService } from "../../../services";
import { liveMetricsService } from "../../../services/liveMetrics.service";
import JourneyStepTraffic from "../../../components/traffifJourneySteps";
import TrafficSourceTop from "../../../components/trafficSourceTop";
import Cookies from 'js-cookie';

const styles = {
    stepStyles: {
        backgroundImage: 'url(/images/step-bg.svg)',
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontSize: 20
    }
}

const UpdateJourney = ({ website, websiteStatus, message }) => {
  const router = useRouter()
  const [session, setSession] = useState("");
  const { funnelMode, journeyId } = router.query
  const [loading, setLoading] = useState(false)
  const [displayAddTrafficSource, setDisplayAddTrafficSource] = useState(true)
  const [loadingPage, setLoadingPage] = useState(true)
  const [error, setError] = useState('')
  const [sourceType, setSourceType] = useState('')
  const [trafficUrls, setTrafficUrls] = useState([])
  const [utm, setUtm] = useState('')
  const [websiteSource, setWebsiteSource] = useState('')
  const [steps, setSteps] = useState([
    { id: '', url: '', metric: '', clickEvent: '', stepName: '' },
  ])
  const [renderStepsArr,setRenderStepsArr]=useState([])


  useEffect(() => {
    const user = Cookies.get('user')?JSON.parse(Cookies.get('user')):null;
    const accessToken = Cookies.get('accessToken')?Cookies.get('accessToken'):null;
    if (!user || !accessToken) {
      router.push('/auth/signIn')
    }
    else if ( user && accessToken && user.isSubscribed) {
      //console.log(session.user.isSubscribed)
      setSession({user,accessToken})

      if (websiteStatus !== 200) {
        router.push('/personalPixel/getDomain')
      setError(message)
    } else {
      if (journeyId && journeyId !== 'new') {
        website &&
          website.userJourney.find((journey) => {
            if (journey.journeyId === journeyId) {
              setSteps(journey.steps)
            }
          })
      }
      setLoading(false)
      setLoadingPage(false)
    }
      //setLoading(false);
    } else if(user && accessToken){
      setSession({user,accessToken})
      paymentService.isSubscribed(session).then((res)=>{
          //console.log(res)
          if(res.status==200 && res.isSubscribed==false){
            router.push('/pricing')
          }else{
            if (session && session.user) {
                if (websiteStatus !== 200) {
                    router.push('/personalPixel/getDomain')
                  setError(message)
                } else {
                  if (journeyId && journeyId !== 'new') {
                    website &&
                      website.userJourney.find((journey) => {
                        if (journey.journeyId === journeyId) {
                          setSteps(journey.steps)
                        }
                      })
                  }
                  setLoading(false)
                  setLoadingPage(false)
                }
              }
          }
        })
      
    }else{
        setLoading(true)
        setLoadingPage(false)
    }
  }, [])


  useEffect( () => {
    const getDataCount=async ()=>{
        //console.log("STEPS :",steps)
        /* await axios.post(process.env.BASE_URL + 'liveMetrics/' + website.websiteId,
                    {
                        steps: steps,
                    },{
                        headers:{
                            "Authorization": session.user.accessToken
                        }
                    }
                ) */
                await liveMetricsService.getLiveMetrics(session, {
                    steps: steps,
                    utm_params:utm,
                    source:websiteSource
                },website.websiteId).then(res => {
                    if(res.status==200){
                        //console.log("res.data.userJourney",res.result)
                        setRenderStepsArr(res.result)
                    }
                    
                })
    }
    session && getDataCount();
    
}, [steps])

const renderSteps = () => {
    const stepCollection = [];

    steps.forEach((step, index) => {
        stepCollection.push(<JourneyStep step={step} key={index} index={index} website={website} onUpdate={onStepUpdate} />)
    })

    return stepCollection;
}

const renderStepsTraffic = () => {
    const stepCollection = [];

    steps.forEach((step, index) => {
        stepCollection.push(<JourneyStepTraffic sourceSet={sourceType} firstRendeUrls={trafficUrls}  step={step} key={index} index={index} website={website} onUpdate={onStepUpdate} />)
    })

    return stepCollection;
}

const onStepUpdate = (index, label, value) => {
    const updatedSteps = steps.map((s, i) => {
        if (i === index) {
            //console.log("*********",s)
            switch (label) {
                case 'url':
                    //console.log("XXX ", s)
                    s['url'] = value;
                    break;
                case 'metric':
                    s['metric'] = value
                    break;
                case 'clickEvent':
                    s['clickEvent'] = value
                    break;
                case 'stepName':
                    s['stepName'] = value
                    break;
                default:
                    //console.log("Invalid Label")
            }
               
            return s;
        } else {
            return s;
        }
    });
    setSteps(updatedSteps);
    //console.log("updatedSteps :",updatedSteps)
}

const handleAddStep = () => {
    const stepList = [...steps];
    stepList.push({ id: "", url: "", metric: "", clickEvent: "", stepName: "",count:0 });
    setSteps(stepList);
}

const handleClickSave = () => {
    const userJourney = {
        steps: steps,
        funnelMode: funnelMode,
        utm_params:utm,
        source:websiteSource
    }
    //console.log(userJourney)
    setLoading(true);

    if (journeyId === 'new') {
        userJourneyService.createUserJourney(session, userJourney, website.websiteId).then(res => {
            if (res.status === 200) {
                router.push('/userJourneys')
            } else {
                setError(res.message);
                setLoading(false);
            }
            
        });
    } else {
        userJourney.journeyId = journeyId;
        userJourneyService.updateUserJourney(session, userJourney, website.websiteId).then(res => {
            //console.log("DDDD ", res)
            if (res.status === 200) {
                router.push('/userJourneys')
            } else {
                //console.log("Res ", res)
                setError(res.message.code);
                setLoading(false);
            }
            
        });
    }
}

const renderStepDiagram = () => {
    const stepList = [];
    if (typeof window === "undefined"){
        var windowWidth=1366
        //console.log("unde")
      }else{
        var windowWidth=window.innerWidth
        //console.log(window.innerWidth)
      }
    renderStepsArr && renderStepsArr.map((step, index) => {
        const widthX =  (windowWidth/5/Math.pow(1.1017, index)) + 'px';
        stepList.push(
            <Grid.Container className="STEPdIAGRAM_LIVE" justify="center" >
                <Grid item lg={2} md={2} justify="flex-end"><Text>{step.count && step.count > 0 ? step.count : 0}</Text></Grid>
                <Grid item lg={10} md={10} justify="center"><div style={{ ...styles.stepStyles, width: widthX }}>{step.stepName}</div></Grid>
                {/* <Grid item lg={3} justify="flex-start"><Text p>{step.stepName}</Text></Grid> */}
            </Grid.Container>
        )
    })

    return stepList;
}

const renderStepDiagramInitialState = () => {
    if (typeof window === "undefined"){
        var windowWidth=1366
        //console.log("unde")
      }else{
        var windowWidth=window.innerWidth
        //console.log(window.innerWidth)
      }
  
        const widthX =  (windowWidth/5/Math.pow(1.1017, 0)) + 'px';
        return(
            <Grid.Container className="STEPdIAGRAM_LIVE" justify="center" >
                <Grid item lg={2} md={2} justify="flex-end"><Text>{0}</Text></Grid>
                <Grid item lg={10} md={10} justify="center"><div style={{ ...styles.stepStyles, width: widthX }}>{""}</div></Grid>
                {/* <Grid item lg={3} justify="flex-start"><Text p>{step.stepName}</Text></Grid> */}
            </Grid.Container>
        )
    }


const renderBothStepAndDiagram=()=>{
    const stepsArr=renderSteps()
    const stepDiagramArr=renderStepDiagram()
    const stepCollectionFinal = [];

    stepsArr.forEach((step, index) => {
        stepCollectionFinal.push(<>
        <Grid lg={4} md={4} sm={4} xs={12} className="grid-for-display-live-diagram" >
                {renderStepsArr.length>0?<Card.Body>
                {stepDiagramArr[index]}
                </Card.Body>:
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <Image src="/images/juorneyCount.png" css={{ minHeight: 250 }} autoResize objectFit="contain" />}
                </Grid>
        <Grid lg={8} md={8} sm={8} xs={12} direction='column'>
                    {stepsArr[index]}
                    
                </Grid>
        </>)
    })
    return stepCollectionFinal
}

const renderBothStepAndDiagramTraffic=()=>{
    const stepsArr=renderStepsTraffic()
    const stepDiagramArr=renderStepDiagram()
    const stepCollectionFinal = [];

    stepsArr.forEach((step, index) => {
        stepCollectionFinal.push(<>
        <Grid lg={4} md={4} sm={4} xs={12} className="grid-for-display-live-diagram" >
                {renderStepsArr.length>0?<Card.Body>
                {stepDiagramArr[index]}
                </Card.Body>:
                    // eslint-disable-next-line jsx-a11y/alt-text
                    renderStepDiagramInitialState()}
                </Grid>
        <Grid lg={8} md={8} sm={8} xs={12} direction='column'>
                    {stepsArr[index]}
                    
                </Grid>
        </>)
    })
    return stepCollectionFinal
}

const handleAddTraffice=()=>{
    setDisplayAddTrafficSource(false)
}


return (
    <>{loadingPage?<></>:<div className="hyper-journey-update">
        <Header />
        <Container lg css={{ paddingTop: 100 }}>
            {!loading ? 
            <Grid.Container>
                <Grid lg={12} md={12} sm={12} xs={12} justify='center' css={{marginBottom: displayAddTrafficSource?0:30 }}>
                    <Text h3 css={{ color: 'var(--button_blue)', }}>Enter the Steps You Want To Track</Text>
                </Grid>
                {displayAddTrafficSource ? <Grid lg={12} md={12} sm={12} xs={12} css={{marginBottom: 60 }} justify='center'>
                <Button className="hyper-btn" onPress={() => handleAddTraffice()} css={{ maxWidth: 400, margin: 'auto', marginTop: 20 }}>
                        ADD TRAFFIC SOURCE
                    </Button>
                    </Grid>:
                    
                    <>
                    <Grid lg={4} md={4} sm={4} xs={12} >
                {}
                </Grid>
                <Grid lg={8} md={8} sm={8} xs={12} direction='column' justify="center" style={{marginTop:8,marginBottom:30}}>
                <TrafficSourceTop sourceSet={(val)=>setSourceType(val)} stepsSet={(val)=>{setSteps(val)}} website={website} setUrls={(val)=>setTrafficUrls(val)} setWebsiteSource={(val)=>setWebsiteSource(val)} setUtm={(val)=>setUtm(val)}/>
                </Grid></>}
    
                {!displayAddTrafficSource?
                <>
                {renderBothStepAndDiagramTraffic()}
                <Grid lg={4} md={4} sm={4} xs={12} >
                {}
                </Grid>
                <Grid lg={8} md={8} sm={8} xs={12} direction='column' justify="center" style={{marginTop:0}}>
                    {/* {renderSteps()} */}
                    <Button bordered onPress={() => handleAddStep()} css={{ maxWidth: 300, margin: 'auto', marginTop: 20, borderColor: 'var(--light_blue)', color: 'var(--light_blue)' }}>
                        {loading ? <Loading color="success" /> : "+ ADD"}
                    </Button>
                    <Button className="hyper-btn" onPress={() => handleClickSave()} css={{ maxWidth: 400, margin: 'auto', marginTop: 20 }}>
                        {loading ? <Loading color="success" /> : "Save"}
                    </Button>
                </Grid>
                </>
                :
                <>
                {renderStepsArr.length>0?<>
                    {renderBothStepAndDiagram()}
                <Grid lg={4} md={4} sm={4} xs={12} >
                {}
                </Grid>
                <Grid lg={8} md={8} sm={8} xs={12} direction='column' justify="center" style={{marginTop:8}}>
                    {/* {renderSteps()} */}
                    <Button bordered onPress={() => handleAddStep()} css={{ maxWidth: 300, margin: 'auto', marginTop: 20, borderColor: 'var(--light_blue)', color: 'var(--light_blue)' }}>
                        {loading ? <Loading color="success" /> : "+ ADD"}
                    </Button>
                    <Button className="hyper-btn" onPress={() => handleClickSave()} css={{ maxWidth: 400, margin: 'auto', marginTop: 20 }}>
                        {loading ? <Loading color="success" /> : "Save"}
                    </Button>
                </Grid>
                </>:
                <>
                <Grid lg={4} md={4} sm={4} xs={12} >
                {renderStepsArr.length>0?<Card.Body>
                {renderStepDiagram()}
                </Card.Body>:
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <Image src="/images/juorneyCount.png" css={{ minHeight: 250 }} autoResize objectFit="contain" />}
                </Grid>
                <Grid lg={8} md={8} sm={8} xs={12} direction='column' style={{marginTop:8}}>
                    {renderSteps()}
                    <Button bordered onPress={() => handleAddStep()} css={{ maxWidth: 300, margin: 'auto', marginTop: 20, borderColor: 'var(--light_blue)', color: 'var(--light_blue)' }}>
                        {loading ? <Loading color="success" /> : "+ ADD"}
                    </Button>
                    <Button className="hyper-btn" onPress={() => handleClickSave()} css={{ maxWidth: 400, margin: 'auto', marginTop: 20 }}>
                        {loading ? <Loading color="success" /> : "Save"}
                    </Button>
                </Grid></>
                }</>
                }
                
                {error && error.length > 0 && <>
                    <Grid lg={4} md={4} sm={4} xs={12} />
                    <Grid lg={8} md={8} sm={8} xs={12} justify='center'>
                        <Text p color="error">An Error Occured : {error}</Text>
                    </Grid>
                </>}
            </Grid.Container> : <Loading color="success" />}
        </Container>
    </div>
}</>
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
        const websiteResponse = await websiteService.getWebsiteByUser(session);
        if (websiteResponse.status === 200) {
            return {
                props: {
                    websiteStatus: websiteResponse.status,
                    website: websiteResponse.website
                }
            }
        } else {
            return {
                props: {
                    websiteStatus: websiteResponse.status,
                    error: websiteResponse.error
                }
            }
        }
    } else {
        return {
            props: {}
        }
    }
    

} catch (error) {
    console.log("Error ", error)
    return {
        props: {
            websiteStatus: 500
        }
    }
}
}
export default UpdateJourney;