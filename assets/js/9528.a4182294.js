"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[9528],{79528:(e,t,i)=>{i.r(t),i.d(t,{dyte_debugger_issues_ui:()=>h,dyte_debugger_permissions_ui:()=>u,dyte_information_tooltip:()=>v});var o=i(65733),s=(i(21237),i(24555),i(68753)),r=i(8934);i(60804);function a({osName:e,browserName:t,media:i}){function o(){return"audio"===i?"Microphone":"video"===i?"Camera":"Screenshare"}if("Chrome"===t)return["Open Chrome browser settings by clicking the three dots at the top right.","Select Settings, Under Privacy and Security, click Site Settings, navigate to Permissions.",`Choose ${o()}, provide the appropriate permission and reload this application.`];if("Safari"===t)return["Open Safari browser settings by clicking on Safari > Preferences at the top left.",`Under Websites, select ${o()} from the devices on the left and pick this webiste.`,"Allow permissions from the pop-up menu and reload this application."];if(t.includes("Opera")){let t=[];return"macOS"===e||"iOS"===e?t.push("To open settings, click Opera in the toolbar (top-left) > Preferences."):t.push("To open settings, click the Opera icon (top-left) > Settings."),t=[...t,"Under Privacy and Security, click Site Settings.",`Select ${o()}, enable permissions and reload this application.`],t}if("Firefox"===t){let t=[];return"macOS"===e||"iOS"===e?t.push("To open settings, at the top right, click Preferneces"):t.push("To open settings, at the top right, click Options"),t=[...t,"Under Privacy and Security, scroll down to the  Permissions  section",`Select Settings for ${o()}`,"Enter the website URL in the search field, enable permissions and reload this application."],t}return t.includes("Edge")?["To open settings, at the top right click Settings & More > Settings.",`Under Site Premissions, click ${o()}.`,"Use the drop-down menu and select the default device, allow permission and reload this application."]:void 0}function n({osName:e,media:t}){function i(){return"audio"===t?"Microphone":"video"===t?"Camera":"Screenshare"}return"macOS"===e?[" To give ${getDevice()} access to your browser, choose Apple menu  > System Settings, then click Privacy & Security.",`From the sidebar select ${i()}`,`If you don\u2019t see  ${i()}, upgrade to macOS Mojave or later.`,"Allow access to your browser,","Reload this application."]:"iOS"===e?[`To give ${i()} access to your browser, go to phone Settings > Privacy.`,`Tap on ${i()}. Allow access for your browser.`,"Reload this application."]:"Windows"===e?[`To give ${i()} access to your browser, go to the Start menu on Windows.`,`Select Settings > Privacy > ${i()}`,"Allow permissions and reload this application."]:e.includes("Android")?[`To give ${i()} access to your browser, go to phone Settings > Apps.`,"Select your browser from the list",`Tap Permissions and allow ${i()} permissions.`,"Reload this application."]:[]}function c({browserName:e,isMobile:t,osName:i}){return"Chrome"===e?t||"macOS"!==i?t?"iOS"===i?"Chrome_ios.mp4":"Android_Chrome.mp4":"":"Desktop_Chrome.mp4":"Firefox"===e?t||"macOs"!==i?t?"iOS"===i?"":"Android_Firefox.mp4":"":"Desktop_Firefox.mp4":"Safari"===e?t?"iOS Safari.mp4":"Desktop_Safari.mp4":e.includes("Edge")?t||"macOs"!==i?"":"Desktop_Edge.mp4":"Opera"===e||"Opera"===e?"":void 0}function d({osName:e}){return"macOS"===e||"iOS"===e||"Windows"===e||e.includes("Android")?"":void 0}const l={audio:{ACCEPTED:{info:"Permission granted",icon:"checkmark",text:"Your audio devices, such as microphones and speakers, should work as expected.",steps:()=>[],image:()=>""},SYSTEM_DENIED:{info:"Permission denied by system",icon:"dismiss",text:"Your browser does not have the required permissions to access your microphone",steps:n,image:d},DENIED:{info:"Permission denied by browser",icon:"dismiss",text:"We do not have the required permissions to access your microphone",steps:a,image:c},COULD_NOT_START:{info:"Could not start device",icon:"dismiss",text:"Access to the microphone may be restricted by a hardware error in the operating system or browser",steps:()=>["Restart your browser.","Update your browser.","If using an external device, try switching to another device.","Switch to a different browser."],image:()=>""},NOT_REQUESTED:{info:"You have not yet used your microphone yet",icon:"warning",text:'We cannot access the data to troubleshoot unless you try to use the microphone at least once. Please click on the "Allow Permissions" button to fix this. Others will not be able to hear you.',steps:()=>[],image:()=>""}},video:{ACCEPTED:{info:"Permission granted",icon:"checkmark",text:"Your camera devices should work as expected",steps:()=>[],image:()=>""},SYSTEM_DENIED:{info:"Permission denied by system",icon:"dismiss",text:"Your browser does not have the required permissions to access your camera",steps:n,image:d},DENIED:{info:"Permission denied by browser",icon:"dismiss",text:"We do not not have the required permissions to access your camera",steps:a,image:c},COULD_NOT_START:{info:"Could not start device",icon:"dismiss",text:"Access to the camera may be restricted by a hardware error in the operating system or browser",steps:()=>["Restart your browser.","Update your browser.","If using an external device, try switching to another device.","Switch to a different browser."],image:()=>""},NOT_REQUESTED:{info:"You have not yet used your camera yet",icon:"warning",text:'We cannot access the data to troubleshoot unless you try to use the camera at least once. Please click on the "Allow Permissions" button to fix this. Others will not be able to see you.',steps:()=>[],image:()=>""}},screenshare:{ACCEPTED:{info:"Permission granted",icon:"checkmark",text:"Your screen share should work as expected",steps:()=>[],image:()=>""},SYSTEM_DENIED:{info:"Permission denied by system",icon:"dismiss",text:"Your browser does not have the required permissions to share screen",steps:n,image:d},DENIED:{info:"Permission denied by browser",icon:"dismiss",text:"We do not have the required permissions to share screen",steps:a,image:c},COULD_NOT_START:{info:"Could not start screenshare",icon:"dismiss",text:"Access for screen share may be restricted by a hardware error in the operating system or browser",steps:()=>["Restart your browser.","Update your browser to the latest version.","Try sharing a tab or window instead of the entire screen.","Switch a different browser."],image:()=>""},NOT_REQUESTED:{info:"You have not yet used shared screen yet",icon:"warning",text:"We cannot access the data to troubleshoot unless you screenshare at least once. You can try screensharing fix this.",steps:()=>[],image:()=>""}}},p={audio:[{index:0,value:"Please select an issue",steps:[],troubleshoot:!1},{index:1,value:"Participants can't hear me",steps:["Please make sure that your microphone is unmuted. You can do this by clicking on the mic icon from the control bar.","If using an external device, please make sure that you are sitting close to the microphone."],troubleshoot:!1},{index:2,value:"I can't hear participants",steps:["Please ensure that the window or tab is not muted.","Please ensure that the volume level of your audio device is not set to 0.","Please ensure you are connected to the correct speaker device."],troubleshoot:!1},{index:3,value:"My audio is laggy",steps:["Please ensure that you have a stable internet connection.","Please try switching to a different audio device.","If your network connection is weak, consider disabling your video to improve the audio bandwidth."],troubleshoot:!1},{index:4,value:"My audio is unclear",steps:["Please make sure you are using a good-quality microphone.","Please make sure you are in close proximity to the microphone."],troubleshoot:!1},{index:5,value:"Participant's audio is laggy",steps:["Please ensure that you have a stable internet connection.","Please request the participant to use an alternative audio device.","If your network connection is weak, consider disabling your video to improve the audio bandwidth."],troubleshoot:!1},{index:6,value:"The audio from a participant is not clear",steps:["Please ensure that your system's speaker volume is checked and adjusted if necessary.","Please request the participant to move close to the microphone."],troubleshoot:!1}],video:[{index:0,value:"Please select an issue",steps:[],troubleshoot:!1},{index:1,value:"Participants can't see my video",steps:["Please ensure you have turned on your video from the control bar.","If using an external device, please ensure your device is connected and working properly."],troubleshoot:!1},{index:2,value:"Not able to view participnats video",steps:["Please ensure you have a stable internet connection.","If you have a poor network connection, please try moving closer to the Wi-Fi router."],troubleshoot:!1},{index:3,value:"My video is laggy",steps:["Please ensure that you have a stable internet connection.","Please try switching to a different video device."],troubleshoot:!1},{index:4,value:"My video is unclear",steps:["Please ensure you are not using a faulty device.","Please make sure you are in a well-lit area.","Please ensure you have a stable internet connection."],troubleshoot:!1},{index:5,value:"Participant's video is laggy",steps:["Please ensure you have a stable internet connection.","Please request the participant to use an alternative video device.","If your network connection is weak, consider disabling your video to improve the audio bandwidth."],troubleshoot:!1},{index:6,value:"Participant's video is unclear",steps:["Please ensure you have a stable internet connection.","Please ensure the participant is not using a faulty device.","Please make sure the participant is in a well-lit area."],troubleshoot:!1}],screenshare:[{index:0,value:"Please select an issue",steps:[],troubleshoot:!1},{index:1,value:"There is a delay in my screen sharing",steps:["Please ensure you have a stable internet connection."],troubleshoot:!1},{index:2,value:"There is a delay in participant's screen share",steps:["Please ensure you have a stable internet connection."],troubleshoot:!1},{index:3,value:"Not able to start or stop screen share",steps:["This error is most likely related to the browser or system you are using. Please ensure that your browser is updated to the latest version.","Please try switching to another browser","Please try sharing a tab or a window incase you are unable to share your entire screen."],troubleshoot:!1},{index:4,value:"Not able to view a participant's screen share",steps:["Please ensure you have a stable internet connection."],troubleshoot:!1}]},h=class{constructor(e){(0,o.r)(this,e),this.meeting=void 0,this.states=void 0,this.size=void 0,this.iconPack=s.d,this.t=(0,r.u)(),this.mediaType=void 0,this.issueIndex=0,this.reported=!0}selectIssue(e){this.issueIndex=parseInt(e),this.reported=!1,setTimeout((()=>{var e;null===(e=this.reportEl)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}),100)}reportIssue(){const{value:e}=p[this.mediaType][this.issueIndex];this.meeting.__internals__.logger.info("dyteTroubleshooting::issue",{issue:e}),this.reported=!0,setTimeout((()=>{this.reported=!1}),3e3)}render(){var e,t,i,s,r,a,n;const c=null!==(e=p[this.mediaType])&&void 0!==e?e:[];return(0,o.h)(o.H,null,(0,o.h)("div",{class:"text"},this.t("Please select a prompt that best describes your issue")),(0,o.h)("select",{class:"dyte-select "+(0===this.issueIndex?"disabled":""),onChange:e=>this.selectIssue(e.target.value)},c.map((e=>(0,o.h)("option",{value:e.index},(0,o.h)("span",null,e.value))))),(null===(i=null===(t=c[this.issueIndex])||void 0===t?void 0:t.steps)||void 0===i?void 0:i.length)>0&&(0,o.h)("div",{class:"sub-title"},this.t("How to fix this:")),null===(r=null===(s=c[this.issueIndex])||void 0===s?void 0:s.steps)||void 0===r?void 0:r.map((e=>(0,o.h)("div",{class:"recommendation"},(0,o.h)("div",null,"\u2022"),this.t(e)))),(null===(n=null===(a=c[this.issueIndex])||void 0===a?void 0:a.steps)||void 0===n?void 0:n.length)>0&&(this.reported?(0,o.h)("p",{class:"report-link"},this.t("Your issue has been reported.")):(0,o.h)("div",{class:"report-issue"},(0,o.h)("p",{class:"recommendation",ref:e=>this.reportEl=e},this.t("Still facing the issue?")),(0,o.h)("dyte-button",{size:"sm",variant:"secondary",onClick:()=>this.reportIssue()},this.t("Report Now")))))}};h.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.dyte-select{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.dyte-select:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.dyte-select{display:block;border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:var(--dyte-space-3, 12px);font-size:16px;--icon-size:var(--dyte-select-chevron-size, var(--dyte-space-6, 24px));--icon-right-position:var(--dyte-select-chevron-right-position, var(--dyte-space-2, 8px));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right var(--icon-right-position) center;background-repeat:no-repeat;background-size:var(--icon-size) var(--icon-size);padding-right:calc(var(--icon-right-position) * 5)}:host{display:flex;width:100%;flex-direction:column;align-items:flex-start;justify-content:flex-start}.section{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.title{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;flex-direction:row;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.title dyte-icon{margin-right:var(--dyte-space-2, 8px)}.sub-title{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);font-size:14px;font-weight:600;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));letter-spacing:0.5px}.text{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);font-size:14px;font-weight:100 !important;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.recommendation{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;font-size:12px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.recommendation div{margin-right:var(--dyte-space-2, 8px)}.device{margin-top:var(--dyte-space-4, 16px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));padding:var(--dyte-space-2, 8px);font-size:12px}select{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);border-width:var(--dyte-border-width-none, 0) !important;border-style:none !important;outline:2px solid transparent !important;outline-offset:2px !important}.dyte-select{width:100%;max-width:100%;font-size:14px}.disabled{color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.report-link{margin-bottom:var(--dyte-space-2, 8px);margin-top:var(--dyte-space-6, 24px);cursor:pointer;font-size:12px;--tw-text-opacity:1 !important;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity)) !important;-webkit-text-decoration-line:underline;text-decoration-line:underline}.report-issue{margin-top:var(--dyte-space-2, 8px)}";const u=class{constructor(e){(0,o.r)(this,e),this.meeting=void 0,this.states=void 0,this.size=void 0,this.iconPack=s.d,this.t=(0,r.u)(),this.issueKey=0,this.permission=void 0,this.devices={},this.mediaType=void 0}connectedCallback(){this.permissionUpdate(this.meeting,this.mediaType)}disconnectedCallback(){const{self:e}=this.meeting;null==e||e.removeListener("mediaPermissionUpdate",this.updatePermission)}permissionUpdate(e,t){var i,o;if(!e||!t)return;const{self:s,troubleshoot:r}=e;this.permission=null!==(o=null===(i=r[t])||void 0===i?void 0:i.mediaPermission)&&void 0!==o?o:"NOT_REQUESTED",this.getDevices(),null==s||s.addListener("mediaPermissionUpdate",this.updatePermission.bind(this)),null==s||s.addListener("deviceUpdate",this.deviceUpdateListener.bind(this))}updatePermission({kind:e,message:t}){e===this.mediaType&&(this.permission=t)}async allowPermission(){var e,t;if("audio"===this.mediaType){const t=null===(e=this.meeting.troubleshoot)||void 0===e?void 0:e.audio;await(null==t?void 0:t.startTrackAnalysis(!0)),t.stopTrackAnalysis()}if("video"===this.mediaType){const e=null===(t=this.meeting.troubleshoot)||void 0===t?void 0:t.video;await e.startPreview(),e.stopPreview()}}deviceUpdateListener({device:e,preview:t}){t||("audioinput"===e.kind&&(this.devices=Object.assign(Object.assign({},this.devices),{Microphone:e})),"audiooutput"===e.kind&&(this.devices=Object.assign(Object.assign({},this.devices),{Speaker:e})),"videoinput"===e.kind&&(this.devices=Object.assign(Object.assign({},this.devices),{Camera:e})))}getDevices(){var e,t;const i=null===(t=null===(e=this.meeting)||void 0===e?void 0:e.self)||void 0===t?void 0:t.getCurrentDevices(),o=null==i?void 0:i.audio,s=null==i?void 0:i.speaker,r=null==i?void 0:i.video;o&&(this.devices=Object.assign(Object.assign({},this.devices),{Microphone:o})),s&&(this.devices=Object.assign(Object.assign({},this.devices),{Speaker:s})),r&&(this.devices=Object.assign(Object.assign({},this.devices),{Camera:r}))}render(){var e;const t=null===(e=l[this.mediaType])||void 0===e?void 0:e[this.permission],{browserName:i,osName:s,isMobile:r}=this.meeting.self.device,a=t.steps({browserName:i,osName:s,media:this.mediaType}),n=t.image({browserName:i,isMobile:r,osName:s}),c="audio"===this.mediaType?["Microphone","Speaker"]:"video"===this.mediaType?["Camera"]:[];return(0,o.h)(o.H,null,(0,o.h)("h3",null,"Device Permissions"),(0,o.h)("div",{class:`info ${this.permission}`},(0,o.h)("dyte-icon",{size:"sm",icon:this.iconPack[t.icon]}),t.info),(0,o.h)("div",{class:"text"},t.text),"ACCEPTED"===this.permission&&c.length>0&&(0,o.h)("div",{class:"device-indicator"},c.map((e=>{var t;return(0,o.h)("div",{class:"device"},(0,o.h)("div",{class:"label"},"Active ",e),(0,o.h)("div",{class:"seperator"},":"),(0,o.h)("div",{class:"device-name"},null===(t=this.devices[e])||void 0===t?void 0:t.label))})),(0,o.h)("div",{class:"text"},this.t("You can change the active devices from settings."))),a.length>0&&(0,o.h)("div",{class:"sub-title"},this.t("How to fix this:")),null==a?void 0:a.map((e=>(0,o.h)("div",{class:"recommendation"},(0,o.h)("div",null,"\u2022"),this.t(e)))),""!==n&&(0,o.h)("video",{src:`https://cdn.dyte.in/assets/permissions/${n}`,autoPlay:!0,muted:!0,loop:!0}),"screenshare"!==this.mediaType&&"NOT_REQUESTED"===this.permission&&(0,o.h)("dyte-button",{onClick:()=>this.allowPermission()},"Allow Device Permission"))}static get watchers(){return{meeting:["permissionUpdate"],mediaType:["permissionUpdate"]}}};u.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.dyte-select{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.dyte-select:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.dyte-select{display:block;border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:var(--dyte-space-3, 12px);font-size:16px;--icon-size:var(--dyte-select-chevron-size, var(--dyte-space-6, 24px));--icon-right-position:var(--dyte-select-chevron-right-position, var(--dyte-space-2, 8px));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right var(--icon-right-position) center;background-repeat:no-repeat;background-size:var(--icon-size) var(--icon-size);padding-right:calc(var(--icon-right-position) * 5)}:host{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;width:100%}h3{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);font-size:14px}.info{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:14px}.info dyte-icon{margin-right:var(--dyte-space-2, 8px)}.text{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);font-size:14px;font-weight:100 !important;line-height:1.5;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.title{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;flex-direction:row;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.title dyte-icon{margin-right:var(--dyte-space-2, 8px)}.device-indicator{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);display:flex;flex-direction:column}.sub-title{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);font-size:14px;font-weight:600;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));letter-spacing:0.5px}.recommendation{margin-bottom:var(--dyte-space-1, 4px);display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;font-size:12px;line-height:1.5;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.recommendation div{margin-right:var(--dyte-space-2, 8px)}.device{margin-bottom:var(--dyte-space-2, 8px);display:flex;flex-direction:row;font-size:14px}.device .label{width:var(--dyte-space-32, 128px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.device .seperator{margin-right:var(--dyte-space-2, 8px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.ACCEPTED{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}.NOT_REQUESTED{color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.NOT_REQUESTED dyte-icon{--tw-text-opacity:1;color:rgba(var(--dyte-colors-warning, 255 205 7) / var(--tw-text-opacity))}.DENIED,.SYSTEM_DENIED,.COULD_NOT_START{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}video{margin-top:var(--dyte-space-2, 8px);height:var(--dyte-space-36, 144px);width:auto;border-radius:var(--dyte-border-radius-md, 8px)}dyte-button{margin-top:var(--dyte-space-2, 8px)}";const v=class{constructor(e){(0,o.r)(this,e),this.iconPack=s.d}render(){return(0,o.h)(o.H,null,(0,o.h)("div",{class:"tooltip-container"},(0,o.h)("dyte-icon",{icon:this.iconPack.info,size:"sm"}),(0,o.h)("div",{class:"tooltip"},(0,o.h)("slot",{name:"tootlip-text"}))))}};v.style=":host{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);cursor:pointer}.tooltip-container{position:relative;display:flex;flex-direction:row;align-items:center}.tooltip-container dyte-icon{cursor:pointer;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.tooltip-container dyte-icon:hover+.tooltip{display:flex !important}.tooltip{position:absolute;margin-left:var(--dyte-space-2, 8px);display:none !important;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));padding:var(--dyte-space-2, 8px);font-weight:400;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52));z-index:50;display:flex;min-width:var(--dyte-space-60, 240px);flex-direction:column;--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);left:14px}"}}]);