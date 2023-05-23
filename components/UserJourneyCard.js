import { Button, Card, Grid, Text } from "@nextui-org/react"
import Link from "next/link"

const styles = {
    stepStyles: {
        backgroundImage: 'url(/images/step-bg.svg)',
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontSize: 20
    }
}

const UserJourneyCard = ({ journey, index,widthWindow }) => {

    const renderSteps = () => {
        const stepList = [];
        journey && journey.steps && journey.steps.map((step, index) => {
            const widthX = (widthWindow/3/Math.pow(1.1017, index)) + 'px';;
            stepList.push(
                <Grid.Container css={styles.stepInner} gap={1} justify="center" alignItems="space-around">
                    <Grid item lg={3} md={3} sm={3} justify="flex-end"><Text>{step.count && step.count > 0 ? step.count : 0}</Text></Grid>
                    <Grid item lg={6} md={6} sm={3} justify="center"><div style={{ ...styles.stepStyles, width: widthX }}>Layer  {index + 1}</div></Grid>
                    <Grid item lg={3} md={3} sm={3} justify="flex-start"><Text p>{step.stepName}</Text></Grid>
                </Grid.Container>
            )
        })

        return stepList;
    }
    
    return (
        <Grid.Container justify="center" gap={2}>
            <Grid item lg={10} md={10} sm={10} xs={12}>
                <Card css={{ borderRadius: 0 }}>
                    <Card.Header css={{ borderBottom: '1px solid #00000038', padding: '0px 15px' }}>
                        <Grid.Container alignItems="center">
                            <Grid item lg={8} md={8} sm={6} xs={12}>
                                <Text h3 css={{ fontWeight: 400 }}>User Journey {index + 1}</Text>
                            </Grid>
                            <Grid item lg={2} md={2} sm={3} xs={12} justify="center">
                                <Link href={'/userJourneys/updateJourney/' + journey.journeyId}>
                                    <Text h4 css={{ color: 'var(--button_blue)', fontWeight: 'bold' }}>
                                        EDIT JOURNEY
                                    </Text>
                                </Link>
                            </Grid>
                            <Grid item lg={2} md={2} sm={3} xs={12} justify="center">
                                <Link href={'/'}>
                                    <Text h4 css={{ color: 'var(--button_blue)', fontWeight: 'bold' }}>
                                        SHARE
                                    </Text>
                                </Link>
                            </Grid>
                        </Grid.Container>
                    </Card.Header>
                    <Card.Body>
                        {renderSteps()}
                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container>
    )
}

export default UserJourneyCard