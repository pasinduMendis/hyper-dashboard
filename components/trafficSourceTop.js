/* eslint-disable react/jsx-no-duplicate-props */
import { Dropdown, Grid, Input, Text } from '@nextui-org/react'
import { useState } from 'react'

const TrafficSourceTop = ({ step, index, onUpdate, website,setUrls,sourceSet,stepsSet,setWebsiteSource,setUtm }) => {
  const sources = ['Website', 'UTM Parameter']
  const utm = ['aaaa', 'bbbb', 'cccc']
  const [trafficeSource, setTrafficeSource] = useState('')
  const [utmParams, setUtmParams] = useState('')
  const [selectSource,setSelectSource]=useState('')
  const [error, setError] = useState('')


  const renderUrls2 = () => {
    const urlList = []
    sources.map((page, i) => {
      //console.log("Page ", page)
      urlList.push(
        <Dropdown.Item key={page}>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif",lineHeight:0.5,
              fontSize:'12px' }}>{page}</p>
        </Dropdown.Item>
      );
    })

    return urlList
  }

  const utmSet=(val)=>{
    setUtm(val)
    setWebsiteSource('')
    setUtmParams(val)
    var relatedUrls=[]
    website.pages.map((page, i) => {
      //console.log("page.utm_params :",page.utm_params)
      if (page.utm_params && page.utm_params.includes(val)) {

        let paramString = page.utm_params.split("?")[1]
        //console.log("paramString :",paramString)
        let queryString = new URLSearchParams(paramString);
        var utmParamString='?'
        var spaceReplace=''
        for (let pair of queryString.entries()) {
          if(pair[0]!='fbclid'){
            utmParamString=utmParamString=='?'?utmParamString+pair[0]+'='+pair[1]:utmParamString+'&'+pair[0]+'='+pair[1]
          }
          
        }
        spaceReplace=utmParamString.replace(/\ /g, '+')
        if(spaceReplace==val){
        //console.log(page)
        relatedUrls.push({pageUrl:page.pageUrl,utm_params:page.utm_params})
        }

      }
      
    });
    //var uniqueRelatedUrls = [...new Set(relatedUrls.map((item) => item))];
    setUrls(relatedUrls)
    //console.log("relatedUrls :",relatedUrls)
  }

  const renderUtms = () => {
    var utmList = [];
    var tempList = [];
    var uniquePageUTMS = [];
    
    website.pages.map((page, i) => {
      if (page.utm_params) {
        //console.log("page.utm_params :",page.utm_params)
        //let paramString = page.utm_params.split("?")[1].split("&");
        let paramString = page.utm_params.split("?")[1]
        //console.log("paramString :",paramString)
        let queryString = new URLSearchParams(paramString);
        var utmParamString='?'
        var spaceReplace=''
        for (let pair of queryString.entries()) {
          if(pair[0]!='fbclid'){
            utmParamString=utmParamString=='?'?utmParamString+pair[0]+'='+pair[1]:utmParamString+'&'+pair[0]+'='+pair[1]
          }
          
        }
        spaceReplace=utmParamString.replace(/\s/g, '+')
        /* console.log("utmParamString :",utmParamString)
        console.log("spaceReplace :",spaceReplace) */
        tempList.push(spaceReplace);
        
      }
    });
    uniquePageUTMS = [...new Set(tempList.map((item) => item))];

    uniquePageUTMS.map((utm, id) => {
      utmList.push(
        <Dropdown.Item lg={3} key={utm}>
          <p
            id={utm + id}
            onMouseEnter={() => {
              document.getElementById(utm + id).style.overflow = "auto";
            }}
            onMouseLeave={() => {
              document.getElementById(utm + id).style.overflow = "hidden";
            }}
            style={{
              maxWidth: "80%",
              overflow: "hidden",
              fontFamily: "Arial, Helvetica, sans-serif",
              lineHeight:'auto',
              fontSize:'12px'
            }}
          >
            {utm}
          </p>
        </Dropdown.Item>
      );
    });

    return utmList;
  };

  const renderSource = () => {
    var sourceList = [];
    var tempList = [];
    var uniquePageSource = [];
    
    website.referrer && website.referrer.map((referrer, i) => {
      if (referrer && new URL(referrer).host != website.domain) {
        tempList.push(referrer)
      }
      
    });

    uniquePageSource = [...new Set(tempList.map((item) => item))];

    uniquePageSource.map((utm, id) => {
      sourceList.push(
        <Dropdown.Item lg={3} key={utm}>
          <p
            id={utm + id}
            onMouseEnter={() => {
              document.getElementById(utm + id).style.overflow = "auto";
            }}
            onMouseLeave={() => {
              document.getElementById(utm + id).style.overflow = "hidden";
            }}
            style={{
              maxWidth: "80%",
              overflow: "hidden",
              fontFamily: "Arial, Helvetica, sans-serif",
              lineHeight:'auto',
              fontSize:'12px'
            }}
          >
            {utm}
          </p>
        </Dropdown.Item>
      );
    });

    if(uniquePageSource.length==0){
      sourceList.push(<Dropdown.Item lg={3} key={'unavailable'}>
          <p style={{
              maxWidth: "80%",
              overflow: "hidden",
              fontFamily: "Arial, Helvetica, sans-serif",
              lineHeight:'auto',
              fontSize:'12px'
            }}>
          unavailable
          </p>
        </Dropdown.Item>)
    }

    return sourceList;
  };

  const setSource=(val)=>{
    setWebsiteSource(val)
    setUtm('')
    setSelectSource(val)
    var relatedUrls=[]
    website.pages.map((page, i) => {
      if (page.source==val) {
        relatedUrls.push({pageUrl:page.pageUrl,source:page.source})
      }
      
    });
    setUrls(relatedUrls)
    //console.log("relatedUrls :",relatedUrls)
  }



  return (
    <>
      <Grid.Container gap={1} alignContent="flex-start">
        <Grid lg={3} md={3} sm={3} xs={3} css={{ overflow: "hidden" }}>
          <Dropdown
            css={{ width: "100%" }}
            className="hyper-dropdown-traffic-list"
          >
            <Dropdown.Button
              bordered
              css={{ borderColor: "var(--light_blue)" }}
              flat
              className="hyper-dropdown hyper-dropdown-traffic"
            >
              <Text h5 css={{ color: "var(--light_blue)" }}>
                {trafficeSource ? trafficeSource : "TRAFFIC SOURCE"}
              </Text>
            </Dropdown.Button>
            <Dropdown.Menu
              selectedKeys={trafficeSource}
              onAction={(value) => {
                setTrafficeSource(value);
                sourceSet(value);
                setUtm('')
                setWebsiteSource('')
                setUrls([]);
                setUtmParams("");
                setSource("")
              }}
              selectionMode="single"
            >
              {renderUrls2()}
            </Dropdown.Menu>
          </Dropdown>
        </Grid>
        <Grid lg={6} md={6} sm={6} xs={6}>
          <Dropdown>
            <Dropdown.Button
              bordered
              css={{ borderColor: "var(--light_blue)" }}
              flat
              className="hyper-dropdown hyper-dropdown-traffic"
            >
              <Text
                h5
                css={{
                  color: "var(--light_blue)",
                  maxWidth: "300px",
                  overflow: "hidden",
                }}
              >
                {trafficeSource == "UTM Parameter" && utmParams
                  ? utmParams
                  : trafficeSource == "Website" && selectSource
                  ? selectSource
                  : "UTM/WEBSITE"}
              </Text>
            </Dropdown.Button>
            <Dropdown.Menu
              className="utmDisplay"
              selectedKeys={utmParams}
              onAction={(value) => {
                if (trafficeSource == "Website") {
                  setSource(value);
                  setSelectSource(value);
                  stepsSet([
                    { id: '', url: '', metric: '', clickEvent: '', stepName: '' },
                  ])
                } else {
                  setUtmParams(value);
                  utmSet(value);
                  stepsSet([
                    { id: '', url: '', metric: '', clickEvent: '', stepName: '' },
                  ])
                }
              }}
              selectionMode="single"
              css={{ width: "100%" }}
            >
              {trafficeSource == "Website" ? renderSource() : renderUtms()}
            </Dropdown.Menu>
          </Dropdown>
        </Grid>

        <Grid lg={3} md={3} sm={3} xs={3}>
          <Input
            value={""}
            onChange={(e) => onUpdate(index, "stepName", e.target.value)}
            placeholder="Enter Step Name"
            fullWidth
          />
        </Grid>
      </Grid.Container>
    </>
  );
}
export default TrafficSourceTop
