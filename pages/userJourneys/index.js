import { Button, Container, Grid, Image, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import UserJourneyCard from "../../components/UserJourneyCard";
import {
  paymentService,
  userJourneyService,
  websiteService,
} from "../../services";
import Cookies from 'js-cookie';

const UserJourneysDashboard = ({ website, websiteStatus, error,message }) => {
  const router = useRouter();
  const [session, setSession] = useState("");
  const [errorMsg, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = Cookies.get('user')?JSON.parse(Cookies.get('user')):null;
    const accessToken = Cookies.get('accessToken')?Cookies.get('accessToken'):null;
    if (!user || !accessToken) {
      router.push('/auth/signIn')
    }
    else if ( user && accessToken && user.isSubscribed) {
      //console.log(session.user.isSubscribed)
      setSession({user,accessToken})
      if (websiteStatus !== 200 || error) {
        setError(message?message:error?error:"error");
        router.push("/personalPixel");
      }else{
      setLoading(false);
      }
      //setLoading(false);
    } else if(user && accessToken){
      setSession({user,accessToken})
      if (websiteStatus !== 200 || error) {
        setError(message?message:error?error:"error");;
        router.push("/personalPixel");
      } else {
        paymentService.isSubscribed(session).then((res) => {
          //console.log(res);
          if (res.status == 200 && res.isSubscribed == false) {
            router.push("/pricing");
          } else {
            setLoading(false);
          }
        });
      }
      
    }else{
      setLoading(true)
    }
  }, [])


  const renderUserJourneys = () => {
    if (typeof window === "undefined") {
      var windowWidth = 1366;
      //console.log("unde");
    } else {
      var windowWidth = window.innerWidth;
      //console.log(window.innerWidth);
    }

    const userJourneyList = [];

    website &&
      website?.userJourney &&
      website?.userJourney.length > 0 &&
      website?.userJourney.map((journey, i) => {
        userJourneyList.push(
          <UserJourneyCard
            journey={journey}
            key={i}
            index={i}
            widthWindow={windowWidth}
          />
        );
      });

    return userJourneyList;
  };

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className="hyper-user-journeys-container">
          <Header />
          <Container lg css={{ paddingTop: 100 }}>
            <Grid.Container justify="center" gap={2}>
              <Grid lg={12} md={12} sm={12} xs={12} justify="center">
                <Text h3 css={{ fontWeight: 400 }}>
                  User Journey Dashboard
                </Text>
              </Grid>

              {website &&
                website?.userJourney &&
                website?.userJourney.length === 0 && (
                  <Grid
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    justify="center"
                    direction="column"
                  >
                    <Image src="/images/juorneyCount.png" autoResize />
                    <Text css={{ textAlign: "center" }}>
                      Create your first Journey
                    </Text>
                  </Grid>
                )}

              {renderUserJourneys()}

              <Grid lg={12} md={12} sm={12} xs={12} justify="center">
                <Button
                  className="hyper-btn"
                  onClick={() => router.push("/userJourneys/funnelMode")}
                >
                  + ADD JOURNEY
                </Button>
              </Grid>
            </Grid.Container>
          </Container>
        </div>
      )}
    </>
  );
};

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
      console.log("websiteResponse :", websiteResponse.website.pages);
      if (websiteResponse.status === 200 && websiteResponse?.website?.pages.length>0) {
        const userJourneyResponse = await userJourneyService.getUserJourneys(
          session,
          websiteResponse.website.websiteId
        );
        console.log("User Journeys x", userJourneyResponse);
        if (userJourneyResponse.status == 200) {
          const updatedWebsite = {
            ...websiteResponse.website,
            userJourney: userJourneyResponse.userjourneys,
          };
          return {
            props: {
              websiteStatus: websiteResponse.status,
              website: updatedWebsite,
            },
          };
        } else {
          return {
            props: {
              websiteStatus: userJourneyResponse.status,
              error: userJourneyResponse.message,
            },
          };
        }
      } else {
        //console.log()
        return {
          props: {
            websiteStatus: websiteResponse.status,
            error: websiteResponse.error?websiteResponse.error:websiteResponse.message?websiteResponse.message:"error",
          },
        };
      }
    } else {
      return {
        props: {},
      };
    }
  } catch (error) {
    //console.log("Error ", error);
    return {
      props: {
        websiteStatus: 500,
      },
    };
  }
}

export default UserJourneysDashboard;
