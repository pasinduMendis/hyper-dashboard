import { Dropdown, Grid, Input, Text } from '@nextui-org/react'
import { useState } from 'react'

const JourneyStepTraffic = ({ step, index, onUpdate, website,firstRendeUrls,sourceSet }) => {
  const [buttonRenderAvailable, setButtonRenderAvailable] = useState(false)

    const renderUrls = () => {
        var uniquePageUrls=[]
        var Utms=[]
       /*  if((index==0 && sourceSet=='UTM Parameter')){
          //onUpdate(index, 'metric', "pageVisit")
          console.log("firstRendeUrls :",firstRendeUrls)
          uniquePageUrls = [...new Set(firstRendeUrls.map(item => item.pageUrl))];
          const urlList = [];
          uniquePageUrls.map((page, i) => {
            //console.log("Page ", page)
            urlList.push(<Dropdown.Item key={page}>{page}</Dropdown.Item>)
        })

        return urlList;
        }
        else if((index==0 && sourceSet=='Website')){
          //onUpdate(index, 'metric', "pageVisit")
          //console.log("firstRendeUrls :",firstRendeUrls)
          uniquePageUrls = [...new Set(firstRendeUrls.map(item => item.pageUrl))];
          const urlList = [];
          uniquePageUrls.map((page, i) => {
            //console.log("Page ", page)
            urlList.push(<Dropdown.Item key={page}>{page}</Dropdown.Item>)
        })

        return urlList;
        }
        else if(website?.pages){
            uniquePageUrls = [...new Set(website.pages.map(item => item.pageUrl))];
        } */
        //console.log("uniquePageUrls :",uniquePageUrls)
        uniquePageUrls = [...new Set(website.pages.map(item => item.pageUrl))];
        const urlList = [];
        uniquePageUrls.map((page, i) => {
            //console.log("Page ", page)
            urlList.push(<Dropdown.Item key={page}>{page}</Dropdown.Item>)
        })

        return urlList;
    }

    const renderClickEvents = () => {
        const clickText = [];
        const clickEventList = [];
        website && website.pages && website.pages.find(page => {
            if (page.pageUrl === step.url) {
                page.clickEvents.map((clickEvent, i) => {
                    const attr = clickEvent.text.replace(/[^a-zA-Z ]/g, "");
                    if (!clickText.includes(attr) && attr[0] !== "") {
                        clickText.push(attr);
                        clickEventList.push(<Dropdown.Item key={attr}>{attr}</Dropdown.Item>)
                    }
                })
            }
        });
        //console.log("clickText", clickText)
        return clickEventList;
    }

  return (
    <>
    <Grid.Container gap={0} alignContent='flex-start'>
    <Grid lg={3} md={3} sm={3} xs={3} css={{ overflow: 'hidden' }}>
        <Dropdown css={{ width: '100%' }}>
            <Dropdown.Button flat className="hyper-dropdown">{(index==0 && firstRendeUrls.length==0)?'URL Here':step.url ? step.url : 'URL Here'}</Dropdown.Button>
            <Dropdown.Menu selectedKeys={step.url} onAction={(value) => {onUpdate(index, 'url', value);if(index==0){
              onUpdate(index, 'metric', "pageVisit")
            }}} selectionMode='single'>
                {renderUrls()}
            </Dropdown.Menu>
        </Dropdown>
    </Grid>
    <Grid lg={3} md={3} sm={3} xs={3}>
        <Dropdown >
        <Dropdown.Button flat className="hyper-dropdown-elect-event" css={{ color:'#44474a !important' }} >{step.metric ? step.metric : 'Metric'}</Dropdown.Button>
            <Dropdown.Menu selectedKeys={step.metric} onAction={(value) => {if(value=='click'){setButtonRenderAvailable(true)}else{setButtonRenderAvailable(false)};onUpdate(index, 'metric', value)}} selectionMode='single'>
                <Dropdown.Item key="click">Click</Dropdown.Item>
                <Dropdown.Item key="pageVisit">Page Visit</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </Grid>
    <Grid lg={3} md={3} sm={3} xs={3}>
        <Dropdown isDisabled={!buttonRenderAvailable} >
            <Dropdown.Button disabled={!buttonRenderAvailable} flat className="hyper-dropdown-elect-event" css={{ color:'#44474a !important' }} >{!buttonRenderAvailable?'Not Available':step.clickEvent ? step.clickEvent : 'Select Event'}</Dropdown.Button>
            <Dropdown.Menu selectedKeys={step.clickEvent} onAction={(value) => onUpdate(index, 'clickEvent', value)} selectionMode='single'>
                {renderClickEvents()}
            </Dropdown.Menu>
        </Dropdown>
    </Grid>
    <Grid lg={3} md={3} sm={3} xs={3}>
        <Input value={step.stepName} onChange={(e) => onUpdate(index, 'stepName', e.target.value)} placeholder="Enter Step Name" fullWidth />
    </Grid>
</Grid.Container>
    </>
  )
}

export default JourneyStepTraffic
