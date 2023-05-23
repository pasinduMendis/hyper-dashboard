/* eslint-disable react/jsx-key */
import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";
import Header from "./Header";
//import { Layout } from "./Layout.js";
//import { AcmeLogo } from "./AcmeLogo.js";

export default function LeftBar({Component}) {
  const collapseItems = [
    <Grid css={{marginBottom:"0vh",marginTop:"5vh",cursor:"pointer"}}>
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4484_3755)">
<path d="M17.4998 2.91699C25.5542 2.91699 32.0832 9.44595 32.0832 17.5003C32.0832 25.5547 25.5542 32.0837 17.4998 32.0837C9.44546 32.0837 2.9165 25.5547 2.9165 17.5003C2.9165 9.44595 9.44546 2.91699 17.4998 2.91699ZM17.4998 7.29199C11.8619 7.29199 7.2915 11.8624 7.2915 17.5003C7.2915 20.2012 8.3415 22.6584 10.0536 24.4843L10.2811 24.7176L12.3432 22.657C11.0248 21.3357 10.2082 19.5128 10.2082 17.5003C10.2082 13.4739 13.4734 10.2087 17.4998 10.2087C18.1532 10.2087 18.7861 10.2947 19.3884 10.4566L21.6678 8.17866C20.3946 7.60991 18.9844 7.29199 17.4998 7.29199ZM26.8215 13.3339L24.545 15.6118C24.7055 16.2141 24.7915 16.847 24.7915 17.5003C24.7915 19.5128 23.9748 21.3357 22.6565 22.657L24.7186 24.7191C26.5648 22.8714 27.7082 20.3193 27.7082 17.5003C27.7082 16.0157 27.3917 14.6055 26.8215 13.3339ZM23.6861 9.25053L18.2538 14.6814C18.0132 14.6172 17.7609 14.5837 17.4998 14.5837C15.8884 14.5837 14.5832 15.8889 14.5832 17.5003C14.5832 19.1118 15.8884 20.417 17.4998 20.417C19.1113 20.417 20.4165 19.1118 20.4165 17.5003C20.4165 17.2393 20.383 16.987 20.3188 16.7464L25.7496 11.3126L23.6875 9.25053H23.6861Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_4484_3755">
<rect width="35" height="35" fill="white"/>
</clipPath>
</defs>
</svg>
</Grid>,

<Grid css={{marginBottom:"0vh",cursor:"pointer"}}>
<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4484_3752)">
<path d="M27.708 30.6255H7.29134C6.90457 30.6255 6.53364 30.4719 6.26014 30.1984C5.98665 29.9249 5.83301 29.554 5.83301 29.1672V16.0422H1.45801L16.5182 2.35137C16.7867 2.10706 17.1367 1.97168 17.4997 1.97168C17.8627 1.97168 18.2126 2.10706 18.4811 2.35137L33.5413 16.0422H29.1663V29.1672C29.1663 29.554 29.0127 29.9249 28.7392 30.1984C28.4657 30.4719 28.0948 30.6255 27.708 30.6255ZM8.74968 27.7089H26.2497V13.3545L17.4997 5.40074L8.74968 13.3545V27.7089ZM17.4997 21.8755C16.5327 21.8755 15.6054 21.4914 14.9217 20.8077C14.238 20.124 13.8538 19.1966 13.8538 18.2297C13.8538 17.2628 14.238 16.3354 14.9217 15.6517C15.6054 14.968 16.5327 14.5839 17.4997 14.5839C18.4666 14.5839 19.3939 14.968 20.0777 15.6517C20.7614 16.3354 21.1455 17.2628 21.1455 18.2297C21.1455 19.1966 20.7614 20.124 20.0777 20.8077C19.3939 21.4914 18.4666 21.8755 17.4997 21.8755Z" fill="#959595"/>
</g>
<defs>
<clipPath id="clip0_4484_3752">
<rect width="35" height="35" fill="white"/>
</clipPath>
</defs>
</svg>
</Grid>,

<Grid css={{marginBottom:"0vh",cursor:"pointer"}}>
<svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4484_3749)">
<path d="M17.5003 31.1663C9.44595 31.1663 2.91699 24.8239 2.91699 16.9997C2.91699 10.6558 7.20887 5.28667 13.1253 3.48184V6.49084C10.6183 7.47974 8.54295 9.28409 7.25416 11.5953C5.96538 13.9064 5.54328 16.5808 6.06007 19.1609C6.57686 21.741 8.00044 24.0664 10.0873 25.7396C12.1741 27.4127 14.7945 28.3294 17.5003 28.333C19.8246 28.3329 22.0959 27.6587 24.0232 26.3968C25.9505 25.1348 27.4461 23.3425 28.3182 21.2497H31.4157C29.5578 26.9971 24.0307 31.1663 17.5003 31.1663V31.1663ZM32.0107 18.4163H16.042V2.90384C16.5218 2.85709 17.0089 2.83301 17.5003 2.83301C25.5547 2.83301 32.0837 9.17542 32.0837 16.9997C32.0837 17.4771 32.0589 17.9503 32.0107 18.4163ZM18.9587 5.75417V15.583H29.0766C28.752 13.0863 27.5816 10.7654 25.7498 8.98592C23.918 7.20645 21.5288 6.0695 18.9587 5.75417Z" fill="#959595"/>
</g>
<defs>
<clipPath id="clip0_4484_3749">
<rect width="35" height="34" fill="white"/>
</clipPath>
</defs>
</svg>

</Grid>,

<Grid css={{marginBottom:"0vh",cursor:"pointer"}}>
<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4484_3746)">
<path d="M10.2087 7.29134V2.91634C10.2087 2.52957 10.3623 2.15863 10.6358 1.88514C10.9093 1.61165 11.2802 1.45801 11.667 1.45801H23.3337C23.7204 1.45801 24.0914 1.61165 24.3649 1.88514C24.6383 2.15863 24.792 2.52957 24.792 2.91634V7.29134H30.6253C31.0121 7.29134 31.383 7.44499 31.6565 7.71848C31.93 7.99197 32.0837 8.3629 32.0837 8.74967V29.1663C32.0837 29.5531 31.93 29.924 31.6565 30.1975C31.383 30.471 31.0121 30.6247 30.6253 30.6247H4.37533C3.98855 30.6247 3.61762 30.471 3.34413 30.1975C3.07064 29.924 2.91699 29.5531 2.91699 29.1663V8.74967C2.91699 8.3629 3.07064 7.99197 3.34413 7.71848C3.61762 7.44499 3.98855 7.29134 4.37533 7.29134H10.2087ZM13.1253 18.958H5.83366V27.708H29.167V18.958H21.8753V23.333H13.1253V18.958ZM29.167 10.208H5.83366V16.0413H13.1253V13.1247H21.8753V16.0413H29.167V10.208ZM16.042 16.0413V20.4163H18.9587V16.0413H16.042ZM13.1253 4.37467V7.29134H21.8753V4.37467H13.1253Z" fill="#959595"/>
</g>
<defs>
<clipPath id="clip0_4484_3746">
<rect width="35" height="35" fill="white"/>
</clipPath>
</defs>
</svg>

</Grid>,

<Grid css={{marginBottom:"0vh",cursor:"pointer"}}>
<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4484_3743)">
<path d="M13.1253 1.45898V4.37565H21.8753V1.45898H24.792V4.37565H30.6253C31.0121 4.37565 31.383 4.5293 31.6565 4.80279C31.93 5.07628 32.0837 5.44721 32.0837 5.83398V29.1673C32.0837 29.5541 31.93 29.925 31.6565 30.1985C31.383 30.472 31.0121 30.6256 30.6253 30.6256H4.37533C3.98855 30.6256 3.61762 30.472 3.34413 30.1985C3.07064 29.925 2.91699 29.5541 2.91699 29.1673V5.83398C2.91699 5.44721 3.07064 5.07628 3.34413 4.80279C3.61762 4.5293 3.98855 4.37565 4.37533 4.37565H10.2087V1.45898H13.1253ZM29.167 11.6673H5.83366V27.709H29.167V11.6673ZM21.9278 14.7823L23.9899 16.8444L16.7712 24.0631L11.6145 18.9065L13.6795 16.8444L16.7726 19.939L21.9293 14.7823H21.9278Z" fill="#959595"/>
</g>
<defs>
<clipPath id="clip0_4484_3743">
<rect width="35" height="35" fill="white"/>
</clipPath>
</defs>
</svg>

</Grid>,

<Grid css={{marginBottom:"0vh",cursor:"pointer"}}>
<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4484_3740)">
<path d="M4.87107 24.7917C4.25459 23.7256 3.77538 22.5859 3.44482 21.3996C4.16423 21.0337 4.7684 20.4759 5.19049 19.788C5.61258 19.1 5.83615 18.3087 5.83645 17.5016C5.83675 16.6945 5.61378 15.903 5.1922 15.2148C4.77062 14.5265 4.16687 13.9683 3.44774 13.6019C4.10696 11.2182 5.36214 9.04158 7.09503 7.27707C7.77183 7.71708 8.55718 7.96126 9.36417 7.98258C10.1711 8.0039 10.9683 7.80153 11.6674 7.39787C12.3665 6.9942 12.9403 6.40498 13.3252 5.69542C13.7102 4.98586 13.8913 4.18362 13.8486 3.37749C16.2433 2.7586 18.7562 2.75961 21.1504 3.3804C21.1081 4.18652 21.2896 4.98864 21.6748 5.698C22.0601 6.40736 22.6341 6.9963 23.3333 7.39966C24.0326 7.80301 24.8297 8.00505 25.6367 7.98341C26.4436 7.96178 27.2288 7.71731 27.9054 7.27707C28.7498 8.13749 29.4994 9.11603 30.1294 10.2083C30.7609 11.3006 31.2334 12.4396 31.5557 13.6004C30.8363 13.9663 30.2321 14.5241 29.81 15.212C29.3879 15.9 29.1643 16.6913 29.164 17.4984C29.1637 18.3055 29.3867 19.0969 29.8083 19.7852C30.2299 20.4734 30.8336 21.0317 31.5527 21.3981C30.8935 23.7818 29.6383 25.9584 27.9054 27.7229C27.2286 27.2829 26.4433 27.0387 25.6363 27.0174C24.8293 26.9961 24.0322 27.1984 23.3331 27.6021C22.634 28.0058 22.0602 28.595 21.6753 29.3045C21.2903 30.0141 21.1092 30.8164 21.1519 31.6225C18.7572 32.2414 16.2443 32.2404 13.85 31.6196C13.8924 30.8135 13.7109 30.0113 13.3256 29.302C12.9404 28.5926 12.3664 28.0037 11.6672 27.6003C10.9679 27.197 10.1707 26.9949 9.3638 27.0166C8.55686 27.0382 7.77164 27.2827 7.09503 27.7229C6.23314 26.8434 5.4859 25.8586 4.87107 24.7917V24.7917ZM13.1252 25.0775C14.6793 25.9738 15.8477 27.4123 16.4065 29.1171C17.1342 29.1856 17.8648 29.1871 18.5925 29.1185C19.1517 27.4135 20.3207 25.975 21.8752 25.0789C23.4287 24.1802 25.2593 23.8867 27.0159 24.255C27.4388 23.66 27.8034 23.0256 28.1067 22.3621C26.91 21.0254 26.249 19.294 26.2502 17.5C26.2502 15.6625 26.9357 13.946 28.1067 12.6379C27.8012 11.9746 27.4351 11.3409 27.0129 10.745C25.2575 11.1129 23.4281 10.8201 21.8752 9.92249C20.3212 9.02615 19.1528 7.58767 18.594 5.8829C17.8663 5.81436 17.1357 5.8129 16.4079 5.88144C15.8488 7.58645 14.6798 9.02497 13.1252 9.92103C11.5718 10.8198 9.74114 11.1132 7.98462 10.745C7.56252 11.3404 7.19731 11.9742 6.89378 12.6379C8.09045 13.9746 8.75153 15.7059 8.75024 17.5C8.75024 19.3375 8.06482 21.0539 6.89378 22.3621C7.19926 23.0254 7.5654 23.6591 7.98753 24.255C9.74295 23.887 11.5724 24.1799 13.1252 25.0775ZM17.5002 21.875C16.3399 21.875 15.2271 21.414 14.4066 20.5936C13.5862 19.7731 13.1252 18.6603 13.1252 17.5C13.1252 16.3397 13.5862 15.2269 14.4066 14.4064C15.2271 13.5859 16.3399 13.125 17.5002 13.125C18.6606 13.125 19.7734 13.5859 20.5938 14.4064C21.4143 15.2269 21.8752 16.3397 21.8752 17.5C21.8752 18.6603 21.4143 19.7731 20.5938 20.5936C19.7734 21.414 18.6606 21.875 17.5002 21.875ZM17.5002 18.9583C17.887 18.9583 18.2579 18.8047 18.5314 18.5312C18.8049 18.2577 18.9586 17.8868 18.9586 17.5C18.9586 17.1132 18.8049 16.7423 18.5314 16.4688C18.2579 16.1953 17.887 16.0417 17.5002 16.0417C17.1135 16.0417 16.7425 16.1953 16.469 16.4688C16.1956 16.7423 16.0419 17.1132 16.0419 17.5C16.0419 17.8868 16.1956 18.2577 16.469 18.5312C16.7425 18.8047 17.1135 18.9583 17.5002 18.9583V18.9583Z" fill="#959595"/>
</g>
<defs>
<clipPath id="clip0_4484_3740">
<rect width="35" height="35" fill="white"/>
</clipPath>
</defs>
</svg>

</Grid>,

<Grid>
<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4484_3737)">
<path d="M9.1363 5.5522L10.809 7.94241C8.77636 9.3654 7.25032 11.3994 6.45259 13.7489C5.65485 16.0984 5.62696 18.6411 6.37298 21.0075C7.11899 23.374 8.60005 25.4409 10.601 26.9082C12.602 28.3754 15.0186 29.1665 17.4998 29.1665C19.9811 29.1665 22.3977 28.3754 24.3987 26.9082C26.3996 25.4409 27.8807 23.374 28.6267 21.0075C29.3727 18.6411 29.3448 16.0984 28.5471 13.7489C27.7494 11.3994 26.2233 9.3654 24.1907 7.94241L25.8634 5.5522C27.7854 6.89595 29.3545 8.68391 30.4374 10.7641C31.5203 12.8443 32.0849 15.1552 32.0832 17.5003C32.0832 25.5547 25.5542 32.0837 17.4998 32.0837C9.44547 32.0837 2.91651 25.5547 2.91651 17.5003C2.91482 15.1552 3.47941 12.8443 4.56228 10.7641C5.64515 8.68391 7.21429 6.89595 9.1363 5.5522V5.5522ZM16.0415 17.5003V2.91699H18.9582V17.5003H16.0415Z" fill="#7942FB"/>
</g>
<defs>
<clipPath id="clip0_4484_3737">
<rect width="35" height="35" fill="white"/>
</clipPath>
</defs>
</svg>

</Grid>
  ];

  return (
    <>
    <Grid.Container className="leftBar" alignContent='flex-start'>
        <Grid lg={1} md={1} sm={1} xs={1} style={{minWidth:"50px",display:"block",background:"#201E7B !important",height:'100vh',position:"sticky",top:"0",left:"0",padding:"5px"}}>
      <Navbar isBordered variant="sticky" css={{background:"#201E7B !important",$$navbarBackgroundColor: "#201E7B",
  $$navbarBlurBackgroundColor: "#201E7B",width:"auto",$$navbarTextColor:"white",
  '@sm': {
    display: 'none',
  },}}  >
        <Navbar.Toggle showIn="sm" css={{color:"white"}} />
        {/* <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
         
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand> */}
        {/* <Navbar.Content
          //enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          //variant="highlight"
          css={{position: "relative",
            display: "block",
            float: "left",
            width: "auto",
            
        }}
        >
           <Navbar.Item>
           <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4484_3755)">
<path d="M17.4998 2.91699C25.5542 2.91699 32.0832 9.44595 32.0832 17.5003C32.0832 25.5547 25.5542 32.0837 17.4998 32.0837C9.44546 32.0837 2.9165 25.5547 2.9165 17.5003C2.9165 9.44595 9.44546 2.91699 17.4998 2.91699ZM17.4998 7.29199C11.8619 7.29199 7.2915 11.8624 7.2915 17.5003C7.2915 20.2012 8.3415 22.6584 10.0536 24.4843L10.2811 24.7176L12.3432 22.657C11.0248 21.3357 10.2082 19.5128 10.2082 17.5003C10.2082 13.4739 13.4734 10.2087 17.4998 10.2087C18.1532 10.2087 18.7861 10.2947 19.3884 10.4566L21.6678 8.17866C20.3946 7.60991 18.9844 7.29199 17.4998 7.29199ZM26.8215 13.3339L24.545 15.6118C24.7055 16.2141 24.7915 16.847 24.7915 17.5003C24.7915 19.5128 23.9748 21.3357 22.6565 22.657L24.7186 24.7191C26.5648 22.8714 27.7082 20.3193 27.7082 17.5003C27.7082 16.0157 27.3917 14.6055 26.8215 13.3339ZM23.6861 9.25053L18.2538 14.6814C18.0132 14.6172 17.7609 14.5837 17.4998 14.5837C15.8884 14.5837 14.5832 15.8889 14.5832 17.5003C14.5832 19.1118 15.8884 20.417 17.4998 20.417C19.1113 20.417 20.4165 19.1118 20.4165 17.5003C20.4165 17.2393 20.383 16.987 20.3188 16.7464L25.7496 11.3126L23.6875 9.25053H23.6861Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_4484_3755">
<rect width="35" height="35" fill="white"/>
</clipPath>
</defs>
</svg>

          </Navbar.Item>
        </Navbar.Content> */}
        {/* <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
              //background:"red",
              //padding:"20px 20px"
              
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="warning"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="warning"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content> */}
        {<Navbar.Collapse disableAnimation css={{width:"20vw",minWidth:"80px",background:"#201E7B !important",display:"grid",justifyContent:"center"}}>
          {collapseItems.map((item,id)=>{
            return <Navbar.CollapseItem
            activeColor="warning"
            key={id}
          >
           {item}

          </Navbar.CollapseItem>
          })}

            <Navbar.CollapseItem
              activeColor="warning"
            >

            </Navbar.CollapseItem>


            <Navbar.CollapseItem
              activeColor="warning"
            >

            </Navbar.CollapseItem>



            <Navbar.CollapseItem
              activeColor="warning"
            >

            </Navbar.CollapseItem>


            <Navbar.CollapseItem
              activeColor="warning"
            >

            </Navbar.CollapseItem>


            <Navbar.CollapseItem
              activeColor="warning"
            >

            </Navbar.CollapseItem>


            <Navbar.CollapseItem
              activeColor="warning"
            >

            </Navbar.CollapseItem>
          
        </Navbar.Collapse>}
      </Navbar>

      <Grid css={{display:"grid",marginTop:"15vh",marginBottom:"15vh",alignContent:"space-between",justifyContent:"center",'@smMax': {
    display: 'none',
  },}}>
    <Grid css={{marginBottom:"3vh",cursor:"pointer"}}>
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4484_3755)">
<path d="M17.4998 2.91699C25.5542 2.91699 32.0832 9.44595 32.0832 17.5003C32.0832 25.5547 25.5542 32.0837 17.4998 32.0837C9.44546 32.0837 2.9165 25.5547 2.9165 17.5003C2.9165 9.44595 9.44546 2.91699 17.4998 2.91699ZM17.4998 7.29199C11.8619 7.29199 7.2915 11.8624 7.2915 17.5003C7.2915 20.2012 8.3415 22.6584 10.0536 24.4843L10.2811 24.7176L12.3432 22.657C11.0248 21.3357 10.2082 19.5128 10.2082 17.5003C10.2082 13.4739 13.4734 10.2087 17.4998 10.2087C18.1532 10.2087 18.7861 10.2947 19.3884 10.4566L21.6678 8.17866C20.3946 7.60991 18.9844 7.29199 17.4998 7.29199ZM26.8215 13.3339L24.545 15.6118C24.7055 16.2141 24.7915 16.847 24.7915 17.5003C24.7915 19.5128 23.9748 21.3357 22.6565 22.657L24.7186 24.7191C26.5648 22.8714 27.7082 20.3193 27.7082 17.5003C27.7082 16.0157 27.3917 14.6055 26.8215 13.3339ZM23.6861 9.25053L18.2538 14.6814C18.0132 14.6172 17.7609 14.5837 17.4998 14.5837C15.8884 14.5837 14.5832 15.8889 14.5832 17.5003C14.5832 19.1118 15.8884 20.417 17.4998 20.417C19.1113 20.417 20.4165 19.1118 20.4165 17.5003C20.4165 17.2393 20.383 16.987 20.3188 16.7464L25.7496 11.3126L23.6875 9.25053H23.6861Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_4484_3755">
<rect width="35" height="35" fill="white"/>
</clipPath>
</defs>
</svg>
</Grid>

<Grid css={{marginBottom:"3vh",cursor:"pointer"}}>
<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4484_3752)">
<path d="M27.708 30.6255H7.29134C6.90457 30.6255 6.53364 30.4719 6.26014 30.1984C5.98665 29.9249 5.83301 29.554 5.83301 29.1672V16.0422H1.45801L16.5182 2.35137C16.7867 2.10706 17.1367 1.97168 17.4997 1.97168C17.8627 1.97168 18.2126 2.10706 18.4811 2.35137L33.5413 16.0422H29.1663V29.1672C29.1663 29.554 29.0127 29.9249 28.7392 30.1984C28.4657 30.4719 28.0948 30.6255 27.708 30.6255ZM8.74968 27.7089H26.2497V13.3545L17.4997 5.40074L8.74968 13.3545V27.7089ZM17.4997 21.8755C16.5327 21.8755 15.6054 21.4914 14.9217 20.8077C14.238 20.124 13.8538 19.1966 13.8538 18.2297C13.8538 17.2628 14.238 16.3354 14.9217 15.6517C15.6054 14.968 16.5327 14.5839 17.4997 14.5839C18.4666 14.5839 19.3939 14.968 20.0777 15.6517C20.7614 16.3354 21.1455 17.2628 21.1455 18.2297C21.1455 19.1966 20.7614 20.124 20.0777 20.8077C19.3939 21.4914 18.4666 21.8755 17.4997 21.8755Z" fill="#959595"/>
</g>
<defs>
<clipPath id="clip0_4484_3752">
<rect width="35" height="35" fill="white"/>
</clipPath>
</defs>
</svg>
</Grid>

<Grid css={{marginBottom:"3vh",cursor:"pointer"}}>
<svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4484_3749)">
<path d="M17.5003 31.1663C9.44595 31.1663 2.91699 24.8239 2.91699 16.9997C2.91699 10.6558 7.20887 5.28667 13.1253 3.48184V6.49084C10.6183 7.47974 8.54295 9.28409 7.25416 11.5953C5.96538 13.9064 5.54328 16.5808 6.06007 19.1609C6.57686 21.741 8.00044 24.0664 10.0873 25.7396C12.1741 27.4127 14.7945 28.3294 17.5003 28.333C19.8246 28.3329 22.0959 27.6587 24.0232 26.3968C25.9505 25.1348 27.4461 23.3425 28.3182 21.2497H31.4157C29.5578 26.9971 24.0307 31.1663 17.5003 31.1663V31.1663ZM32.0107 18.4163H16.042V2.90384C16.5218 2.85709 17.0089 2.83301 17.5003 2.83301C25.5547 2.83301 32.0837 9.17542 32.0837 16.9997C32.0837 17.4771 32.0589 17.9503 32.0107 18.4163ZM18.9587 5.75417V15.583H29.0766C28.752 13.0863 27.5816 10.7654 25.7498 8.98592C23.918 7.20645 21.5288 6.0695 18.9587 5.75417Z" fill="#959595"/>
</g>
<defs>
<clipPath id="clip0_4484_3749">
<rect width="35" height="34" fill="white"/>
</clipPath>
</defs>
</svg>

</Grid>

<Grid css={{marginBottom:"3vh",cursor:"pointer"}}>
<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4484_3746)">
<path d="M10.2087 7.29134V2.91634C10.2087 2.52957 10.3623 2.15863 10.6358 1.88514C10.9093 1.61165 11.2802 1.45801 11.667 1.45801H23.3337C23.7204 1.45801 24.0914 1.61165 24.3649 1.88514C24.6383 2.15863 24.792 2.52957 24.792 2.91634V7.29134H30.6253C31.0121 7.29134 31.383 7.44499 31.6565 7.71848C31.93 7.99197 32.0837 8.3629 32.0837 8.74967V29.1663C32.0837 29.5531 31.93 29.924 31.6565 30.1975C31.383 30.471 31.0121 30.6247 30.6253 30.6247H4.37533C3.98855 30.6247 3.61762 30.471 3.34413 30.1975C3.07064 29.924 2.91699 29.5531 2.91699 29.1663V8.74967C2.91699 8.3629 3.07064 7.99197 3.34413 7.71848C3.61762 7.44499 3.98855 7.29134 4.37533 7.29134H10.2087ZM13.1253 18.958H5.83366V27.708H29.167V18.958H21.8753V23.333H13.1253V18.958ZM29.167 10.208H5.83366V16.0413H13.1253V13.1247H21.8753V16.0413H29.167V10.208ZM16.042 16.0413V20.4163H18.9587V16.0413H16.042ZM13.1253 4.37467V7.29134H21.8753V4.37467H13.1253Z" fill="#959595"/>
</g>
<defs>
<clipPath id="clip0_4484_3746">
<rect width="35" height="35" fill="white"/>
</clipPath>
</defs>
</svg>

</Grid>

<Grid css={{marginBottom:"3vh",cursor:"pointer"}}>
<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4484_3743)">
<path d="M13.1253 1.45898V4.37565H21.8753V1.45898H24.792V4.37565H30.6253C31.0121 4.37565 31.383 4.5293 31.6565 4.80279C31.93 5.07628 32.0837 5.44721 32.0837 5.83398V29.1673C32.0837 29.5541 31.93 29.925 31.6565 30.1985C31.383 30.472 31.0121 30.6256 30.6253 30.6256H4.37533C3.98855 30.6256 3.61762 30.472 3.34413 30.1985C3.07064 29.925 2.91699 29.5541 2.91699 29.1673V5.83398C2.91699 5.44721 3.07064 5.07628 3.34413 4.80279C3.61762 4.5293 3.98855 4.37565 4.37533 4.37565H10.2087V1.45898H13.1253ZM29.167 11.6673H5.83366V27.709H29.167V11.6673ZM21.9278 14.7823L23.9899 16.8444L16.7712 24.0631L11.6145 18.9065L13.6795 16.8444L16.7726 19.939L21.9293 14.7823H21.9278Z" fill="#959595"/>
</g>
<defs>
<clipPath id="clip0_4484_3743">
<rect width="35" height="35" fill="white"/>
</clipPath>
</defs>
</svg>

</Grid>

<Grid css={{marginBottom:"10vh",cursor:"pointer"}}>
<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4484_3740)">
<path d="M4.87107 24.7917C4.25459 23.7256 3.77538 22.5859 3.44482 21.3996C4.16423 21.0337 4.7684 20.4759 5.19049 19.788C5.61258 19.1 5.83615 18.3087 5.83645 17.5016C5.83675 16.6945 5.61378 15.903 5.1922 15.2148C4.77062 14.5265 4.16687 13.9683 3.44774 13.6019C4.10696 11.2182 5.36214 9.04158 7.09503 7.27707C7.77183 7.71708 8.55718 7.96126 9.36417 7.98258C10.1711 8.0039 10.9683 7.80153 11.6674 7.39787C12.3665 6.9942 12.9403 6.40498 13.3252 5.69542C13.7102 4.98586 13.8913 4.18362 13.8486 3.37749C16.2433 2.7586 18.7562 2.75961 21.1504 3.3804C21.1081 4.18652 21.2896 4.98864 21.6748 5.698C22.0601 6.40736 22.6341 6.9963 23.3333 7.39966C24.0326 7.80301 24.8297 8.00505 25.6367 7.98341C26.4436 7.96178 27.2288 7.71731 27.9054 7.27707C28.7498 8.13749 29.4994 9.11603 30.1294 10.2083C30.7609 11.3006 31.2334 12.4396 31.5557 13.6004C30.8363 13.9663 30.2321 14.5241 29.81 15.212C29.3879 15.9 29.1643 16.6913 29.164 17.4984C29.1637 18.3055 29.3867 19.0969 29.8083 19.7852C30.2299 20.4734 30.8336 21.0317 31.5527 21.3981C30.8935 23.7818 29.6383 25.9584 27.9054 27.7229C27.2286 27.2829 26.4433 27.0387 25.6363 27.0174C24.8293 26.9961 24.0322 27.1984 23.3331 27.6021C22.634 28.0058 22.0602 28.595 21.6753 29.3045C21.2903 30.0141 21.1092 30.8164 21.1519 31.6225C18.7572 32.2414 16.2443 32.2404 13.85 31.6196C13.8924 30.8135 13.7109 30.0113 13.3256 29.302C12.9404 28.5926 12.3664 28.0037 11.6672 27.6003C10.9679 27.197 10.1707 26.9949 9.3638 27.0166C8.55686 27.0382 7.77164 27.2827 7.09503 27.7229C6.23314 26.8434 5.4859 25.8586 4.87107 24.7917V24.7917ZM13.1252 25.0775C14.6793 25.9738 15.8477 27.4123 16.4065 29.1171C17.1342 29.1856 17.8648 29.1871 18.5925 29.1185C19.1517 27.4135 20.3207 25.975 21.8752 25.0789C23.4287 24.1802 25.2593 23.8867 27.0159 24.255C27.4388 23.66 27.8034 23.0256 28.1067 22.3621C26.91 21.0254 26.249 19.294 26.2502 17.5C26.2502 15.6625 26.9357 13.946 28.1067 12.6379C27.8012 11.9746 27.4351 11.3409 27.0129 10.745C25.2575 11.1129 23.4281 10.8201 21.8752 9.92249C20.3212 9.02615 19.1528 7.58767 18.594 5.8829C17.8663 5.81436 17.1357 5.8129 16.4079 5.88144C15.8488 7.58645 14.6798 9.02497 13.1252 9.92103C11.5718 10.8198 9.74114 11.1132 7.98462 10.745C7.56252 11.3404 7.19731 11.9742 6.89378 12.6379C8.09045 13.9746 8.75153 15.7059 8.75024 17.5C8.75024 19.3375 8.06482 21.0539 6.89378 22.3621C7.19926 23.0254 7.5654 23.6591 7.98753 24.255C9.74295 23.887 11.5724 24.1799 13.1252 25.0775ZM17.5002 21.875C16.3399 21.875 15.2271 21.414 14.4066 20.5936C13.5862 19.7731 13.1252 18.6603 13.1252 17.5C13.1252 16.3397 13.5862 15.2269 14.4066 14.4064C15.2271 13.5859 16.3399 13.125 17.5002 13.125C18.6606 13.125 19.7734 13.5859 20.5938 14.4064C21.4143 15.2269 21.8752 16.3397 21.8752 17.5C21.8752 18.6603 21.4143 19.7731 20.5938 20.5936C19.7734 21.414 18.6606 21.875 17.5002 21.875ZM17.5002 18.9583C17.887 18.9583 18.2579 18.8047 18.5314 18.5312C18.8049 18.2577 18.9586 17.8868 18.9586 17.5C18.9586 17.1132 18.8049 16.7423 18.5314 16.4688C18.2579 16.1953 17.887 16.0417 17.5002 16.0417C17.1135 16.0417 16.7425 16.1953 16.469 16.4688C16.1956 16.7423 16.0419 17.1132 16.0419 17.5C16.0419 17.8868 16.1956 18.2577 16.469 18.5312C16.7425 18.8047 17.1135 18.9583 17.5002 18.9583V18.9583Z" fill="#959595"/>
</g>
<defs>
<clipPath id="clip0_4484_3740">
<rect width="35" height="35" fill="white"/>
</clipPath>
</defs>
</svg>

</Grid>

<Grid>
<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4484_3737)">
<path d="M9.1363 5.5522L10.809 7.94241C8.77636 9.3654 7.25032 11.3994 6.45259 13.7489C5.65485 16.0984 5.62696 18.6411 6.37298 21.0075C7.11899 23.374 8.60005 25.4409 10.601 26.9082C12.602 28.3754 15.0186 29.1665 17.4998 29.1665C19.9811 29.1665 22.3977 28.3754 24.3987 26.9082C26.3996 25.4409 27.8807 23.374 28.6267 21.0075C29.3727 18.6411 29.3448 16.0984 28.5471 13.7489C27.7494 11.3994 26.2233 9.3654 24.1907 7.94241L25.8634 5.5522C27.7854 6.89595 29.3545 8.68391 30.4374 10.7641C31.5203 12.8443 32.0849 15.1552 32.0832 17.5003C32.0832 25.5547 25.5542 32.0837 17.4998 32.0837C9.44547 32.0837 2.91651 25.5547 2.91651 17.5003C2.91482 15.1552 3.47941 12.8443 4.56228 10.7641C5.64515 8.68391 7.21429 6.89595 9.1363 5.5522V5.5522ZM16.0415 17.5003V2.91699H18.9582V17.5003H16.0415Z" fill="#7942FB"/>
</g>
<defs>
<clipPath id="clip0_4484_3737">
<rect width="35" height="35" fill="white"/>
</clipPath>
</defs>
</svg>

</Grid>

      </Grid>

        </Grid>
        <Grid lg={8} md={8} sm={8} xs={8}>
            {Component?<><Component /></>:"No components"}
        </Grid>
    </Grid.Container>
    </>
  );
}
