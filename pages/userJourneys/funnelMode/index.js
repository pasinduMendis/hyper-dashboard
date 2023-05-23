import { Card, Container, Grid, Image, Link, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import Header from '../../../components/Header'

const FunnelMode = () => {
  const router = useRouter()
  return (
    <div className='hyper-funnel-mode-container'>
      <Header />
      <Container lg css={{ paddingTop: 150 }}>
        <Card css={{ maxWidth: 1000, margin: 'auto', height: '450px' }}>
          <Card.Body css={{ padding: '10px 40px' }}>
            <Text h3 css={{ textAlign: 'center', color: 'var(--button_blue)' }}>
              How Do You Want To Create Your Funnel?
            </Text>
            <Grid.Container gap={1} css={{ marginTop: 20 }}>
              <Grid lg={6} md={6} sm={6} xs={12} justify='flex-end'>
                <Link
                  href='/userJourneys/updateJourney/new?funnelMode=manual'
                  css={{ minWidth: '100%' }}
                >
                  <Card css={{ height: '220px' }}>
                    <Card.Body css={{ marginTop: 35 }}>
                      <Image src='/images/manual-track-icon.svg' autoResize />
                      <Text h4 css={{ textAlign: 'center' }}>
                        Manually Track
                      </Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Grid>
              <Grid
                lg={6}
                md={6}
                sm={6}
                xs={12}
                justify='flex-end'
              >
                <Link href='/userJourneys/automaticallyTrack' css={{ minWidth: '100%' }}>
                  <Card
                    css={{ height: '220px' }}
                  >
                    <Card.Body css={{ marginTop: 35 }}>
                      <Image src='/images/auto-track-icon.svg' autoResize />
                      <Text h4 css={{ textAlign: 'center' }}>
                        Automatically Track
                      </Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Grid>
            </Grid.Container>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default FunnelMode
