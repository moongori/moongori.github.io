if(Detectizr.browser.name != 'ie') {
	!function(){"use strict";function e(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function t(e){return e[e.length-1]}function i(e,...t){return t.forEach(t=>{e.includes(t)||e.push(t)}),e}function s(e,t){return e?e.split(t):[]}function a(e,t,i){return(void 0===t||e>=t)&&(void 0===i||e<=i)}function n(e,t,i){return e<t?t:e>i?i:e}function r(e,t,i={},s=0,a=""){a+=`<${Object.keys(i).reduce((e,t)=>{let a=i[t];return"function"==typeof a&&(a=a(s)),`${e} ${t}="${a}"`},e)}></${e}>`;const n=s+1;return n<t?r(e,t,i,n,a):a}function d(e){return e.replace(/>\s+/g,">").replace(/\s+</,"<")}function o(e){return new Date(e).setHours(0,0,0,0)}function c(){return(new Date).setHours(0,0,0,0)}function l(...e){switch(e.length){case 0:return c();case 1:return o(e[0])}const t=new Date(0);return t.setFullYear(...e),t.setHours(0,0,0,0)}function h(e,t){const i=new Date(e);return i.setDate(i.getDate()+t)}function u(e,t){const i=new Date(e),s=i.getMonth()+t;let a=s%12;a<0&&(a+=12);const n=i.setMonth(s);return i.getMonth()!==a?i.setDate(0):n}function f(e,t){const i=new Date(e),s=i.getMonth(),a=i.setFullYear(i.getFullYear()+t);return 1===s&&2===i.getMonth()?i.setDate(0):a}function p(e,t){return(e-t+7)%7}function g(e,t,i=0){const s=new Date(e).getDay();return h(e,p(t,i)-p(s,i))}function m(e,t){const i=new Date(e).getFullYear();return Math.floor(i/t)*t}const w=/dd?|DD?|mm?|MM?|yy?(?:yy)?/,y=/[\s!-/:-@[-`{-~年月日]+/;let k={};const D={y:(e,t)=>new Date(e).setFullYear(parseInt(t,10)),m(e,t,i){const s=new Date(e);let a=parseInt(t,10)-1;if(isNaN(a)){if(!t)return NaN;const e=t.toLowerCase(),s=t=>t.toLowerCase().startsWith(e);if((a=i.monthsShort.findIndex(s))<0&&(a=i.months.findIndex(s)),a<0)return NaN}return s.setMonth(a),s.getMonth()!==function e(t){return t>-1?t%12:e(t+12)}(a)?s.setDate(0):s.getTime()},d:(e,t)=>new Date(e).setDate(parseInt(t,10))},v={d:e=>e.getDate(),dd:e=>b(e.getDate(),2),D:(e,t)=>t.daysShort[e.getDay()],DD:(e,t)=>t.days[e.getDay()],m:e=>e.getMonth()+1,mm:e=>b(e.getMonth()+1,2),M:(e,t)=>t.monthsShort[e.getMonth()],MM:(e,t)=>t.months[e.getMonth()],y:e=>e.getFullYear(),yy:e=>b(e.getFullYear(),2).slice(-2),yyyy:e=>b(e.getFullYear(),4)};function b(e,t){return e.toString().padStart(t,"0")}function x(e){if("string"!=typeof e)throw new Error("Invalid date format.");if(e in k)return k[e];const i=e.split(w),s=e.match(new RegExp(w,"g"));if(0===i.length||!s)throw new Error("Invalid date format.");const a=s.map(e=>v[e]),n=Object.keys(D).reduce((e,t)=>{return s.find(e=>"D"!==e[0]&&e[0].toLowerCase()===t)&&e.push(t),e},[]);return k[e]={parser(e,t){const i=e.split(y).reduce((e,t,i)=>{if(t.length>0&&s[i]){const a=s[i][0];"M"===a?e.m=t:"D"!==a&&(e[a]=t)}return e},{});return n.reduce((e,s)=>{const a=D[s](e,i[s],t);return isNaN(a)?e:a},c())},formatter:(e,s)=>a.reduce((t,a,n)=>t+`${i[n]}${a(e,s)}`,"")+t(i)}}function M(e,t,i){if(e instanceof Date||"number"==typeof e){const t=o(e);return isNaN(t)?void 0:t}if(e){if("today"===e)return c();if(t&&t.toValue){const s=t.toValue(e,t,i);return isNaN(s)?void 0:o(s)}return x(t).parser(e,i)}}function S(e,t,i){if(isNaN(e)||!e&&0!==e)return"";const s="number"==typeof e?new Date(e):e;return t.toDisplay?t.toDisplay(s,t,i):x(t).formatter(s,i)}const O=new WeakMap,{addEventListener:C,removeEventListener:E}=EventTarget.prototype;function F(e,t){let i=O.get(e);i||(i=[],O.set(e,i)),t.forEach(e=>{C.call(...e),i.push(e)})}function V(e){let t=O.get(e);t&&(t.forEach(e=>{E.call(...e)}),O.delete(e))}if(!Event.prototype.composedPath){const e=(t,i=[])=>{let s;return i.push(t),t.parentNode?s=t.parentNode:t.host?s=t.host:t.defaultView&&(s=t.defaultView),s?e(s,i):i};Event.prototype.composedPath=function(){return e(this.target)}}function N(e,t){const i="function"==typeof t?t:e=>e.matches(t);return function e(t,i,s,a=0){const n=t[a];return i(n)?n:n!==s&&n.parentElement?e(t,i,s,a+1):void 0}(e.composedPath(),i,e.currentTarget)}const L={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM y"}},B={autohide:!1,beforeShowDay:null,beforeShowDecade:null,beforeShowMonth:null,beforeShowYear:null,calendarWeeks:!1,clearBtn:!1,dateDelimiter:",",datesDisabled:[],daysOfWeekDisabled:[],daysOfWeekHighlighted:[],defaultViewDate:void 0,disableTouchKeyboard:!1,format:"mm/dd/yyyy",language:"en",maxDate:null,maxNumberOfDates:1,maxView:3,minDate:null,nextArrow:"»",orientation:"auto",pickLevel:0,prevArrow:"«",showDaysOfWeek:!0,showOnClick:!0,showOnFocus:!0,startView:0,title:"",todayBtn:!1,todayBtnMode:0,todayHighlight:!1,updateOnBlur:!0,weekStart:0},A=document.createRange();function Y(e){return A.createContextualFragment(e)}function W(e){"none"!==e.style.display&&(e.style.display&&(e.dataset.styleDisplay=e.style.display),e.style.display="none")}function K(e){"none"===e.style.display&&(e.dataset.styleDisplay?(e.style.display=e.dataset.styleDisplay,delete e.dataset.styleDisplay):e.style.display="")}function T(e){e.firstChild&&(e.removeChild(e.firstChild),T(e))}const{language:j,format:H,weekStart:$}=B;function _(e,t){return e.length<6&&t>=0&&t<7?i(e,t):e}function P(e){return(e+6)%7}function R(e,t,i,s){const a=M(e,t,i);return void 0!==a?a:s}function I(e,t,i=3){const s=parseInt(e,10);return s>=0&&s<=i?s:t}function q(t,s){const a=Object.assign({},t),n={},r=s.constructor.locales;let{format:d,language:o,locale:c,maxDate:h,maxView:u,minDate:f,pickLevel:p,startView:g,weekStart:m}=s.config||{};if(a.language){let e;if(a.language!==o&&(r[a.language]?e=a.language:void 0===r[e=a.language.split("-")[0]]&&(e=!1)),delete a.language,e){o=n.language=e;const t=c||r[j];c=Object.assign({format:H,weekStart:$},r[j]),o!==j&&Object.assign(c,r[o]),n.locale=c,d===t.format&&(d=n.format=c.format),m===t.weekStart&&(m=n.weekStart=c.weekStart,n.weekEnd=P(c.weekStart))}}if(a.format){const e="function"==typeof a.format.toDisplay,t="function"==typeof a.format.toValue,i=w.test(a.format);(e&&t||i)&&(d=n.format=a.format),delete a.format}let y=f,k=h;if(void 0!==a.minDate&&(y=null===a.minDate?l(0,0,1):R(a.minDate,d,c,y),delete a.minDate),void 0!==a.maxDate&&(k=null===a.maxDate?void 0:R(a.maxDate,d,c,k),delete a.maxDate),k<y?(f=n.minDate=k,h=n.maxDate=y):(f!==y&&(f=n.minDate=y),h!==k&&(h=n.maxDate=k)),a.datesDisabled&&(n.datesDisabled=a.datesDisabled.reduce((e,t)=>{const s=M(t,d,c);return void 0!==s?i(e,s):e},[]),delete a.datesDisabled),void 0!==a.defaultViewDate){const e=M(a.defaultViewDate,d,c);void 0!==e&&(n.defaultViewDate=e),delete a.defaultViewDate}if(void 0!==a.weekStart){const e=Number(a.weekStart)%7;isNaN(e)||(m=n.weekStart=e,n.weekEnd=P(e)),delete a.weekStart}if(a.daysOfWeekDisabled&&(n.daysOfWeekDisabled=a.daysOfWeekDisabled.reduce(_,[]),delete a.daysOfWeekDisabled),a.daysOfWeekHighlighted&&(n.daysOfWeekHighlighted=a.daysOfWeekHighlighted.reduce(_,[]),delete a.daysOfWeekHighlighted),void 0!==a.maxNumberOfDates){const e=parseInt(a.maxNumberOfDates,10);e>=0&&(n.maxNumberOfDates=e,n.multidate=1!==e),delete a.maxNumberOfDates}a.dateDelimiter&&(n.dateDelimiter=String(a.dateDelimiter),delete a.dateDelimiter);let D=p;void 0!==a.pickLevel&&(D=I(a.pickLevel,2),delete a.pickLevel),D!==p&&(p=n.pickLevel=D);let v=u;void 0!==a.maxView&&(v=I(a.maxView,u),delete a.maxView),(v=p>v?p:v)!==u&&(u=n.maxView=v);let b=g;if(void 0!==a.startView&&(b=I(a.startView,b),delete a.startView),b<p?b=p:b>u&&(b=u),b!==g&&(n.startView=b),a.prevArrow){const e=Y(a.prevArrow);e.childNodes.length>0&&(n.prevArrow=e.childNodes),delete a.prevArrow}if(a.nextArrow){const e=Y(a.nextArrow);e.childNodes.length>0&&(n.nextArrow=e.childNodes),delete a.nextArrow}if(void 0!==a.disableTouchKeyboard&&(n.disableTouchKeyboard="ontouchstart"in document&&!!a.disableTouchKeyboard,delete a.disableTouchKeyboard),a.orientation){const e=a.orientation.toLowerCase().split(/\s+/g);n.orientation={x:e.find(e=>"left"===e||"right"===e)||"auto",y:e.find(e=>"top"===e||"bottom"===e)||"auto"},delete a.orientation}if(void 0!==a.todayBtnMode){switch(a.todayBtnMode){case 0:case 1:n.todayBtnMode=a.todayBtnMode}delete a.todayBtnMode}return Object.keys(a).forEach(t=>{void 0!==a[t]&&e(B,t)&&(n[t]=a[t])}),n}const J=d('<div class="datepicker">\n  <div class="datepicker-picker">\n    <div class="datepicker-header">\n      <div class="datepicker-title"></div>\n      <div class="datepicker-controls">\n        <button type="button" class="%buttonClass% prev-btn"></button>\n        <button type="button" class="%buttonClass% view-switch"></button>\n        <button type="button" class="%buttonClass% next-btn"></button>\n      </div>\n    </div>\n    <div class="datepicker-main"></div>\n    <div class="datepicker-footer">\n      <div class="datepicker-controls">\n        <button type="button" class="%buttonClass% today-btn"></button>\n        <button type="button" class="%buttonClass% clear-btn"></button>\n      </div>\n    </div>\n  </div>\n</div>'),U=d(`<div class="days">\n  <div class="days-of-week">${r("span",7,{class:"dow"})}</div>\n  <div class="datepicker-grid">${r("span",42)}</div>\n</div>`),z=d(`<div class="calendar-weeks">\n  <div class="days-of-week"><span class="dow"></span></div>\n  <div class="weeks">${r("span",6,{class:"week"})}</div>\n</div>`);class X{constructor(e,t){Object.assign(this,t,{picker:e,element:Y('<div class="datepicker-view"></div>').firstChild,selected:[]}),this.init(this.picker.datepicker.config)}init(e){void 0!==e.pickLevel&&(this.isMinView=this.id===e.pickLevel),this.setOptions(e),this.updateFocus(),this.updateSelection()}performBeforeHook(e,t,s){let a=this.beforeShow(new Date(s));switch(typeof a){case"boolean":a={enabled:a};break;case"string":a={classes:a}}if(a){if(!1===a.enabled&&(e.classList.add("disabled"),i(this.disabled,t)),a.classes){const s=a.classes.split(/\s+/);e.classList.add(...s),s.includes("disabled")&&i(this.disabled,t)}a.content&&function(e,t){T(e),t instanceof DocumentFragment?e.appendChild(t):"string"==typeof t?e.appendChild(Y(t)):"function"==typeof t.forEach&&t.forEach(t=>{e.appendChild(t)})}(e,a.content)}}}class G extends X{constructor(e){super(e,{id:0,name:"days",cellClass:"day"})}init(e,t=!0){if(t){const e=Y(U).firstChild;this.dow=e.firstChild,this.grid=e.lastChild,this.element.appendChild(e)}super.init(e)}setOptions(t){let i;if(e(t,"minDate")&&(this.minDate=t.minDate),e(t,"maxDate")&&(this.maxDate=t.maxDate),t.datesDisabled&&(this.datesDisabled=t.datesDisabled),t.daysOfWeekDisabled&&(this.daysOfWeekDisabled=t.daysOfWeekDisabled,i=!0),t.daysOfWeekHighlighted&&(this.daysOfWeekHighlighted=t.daysOfWeekHighlighted),void 0!==t.todayHighlight&&(this.todayHighlight=t.todayHighlight),void 0!==t.weekStart&&(this.weekStart=t.weekStart,this.weekEnd=t.weekEnd,i=!0),t.locale){const e=this.locale=t.locale;this.dayNames=e.daysMin,this.switchLabelFormat=e.titleFormat,i=!0}if(void 0!==t.beforeShowDay&&(this.beforeShow="function"==typeof t.beforeShowDay?t.beforeShowDay:void 0),void 0!==t.calendarWeeks)if(t.calendarWeeks&&!this.calendarWeeks){const e=Y(z).firstChild;this.calendarWeeks={element:e,dow:e.firstChild,weeks:e.lastChild},this.element.insertBefore(e,this.element.firstChild)}else this.calendarWeeks&&!t.calendarWeeks&&(this.element.removeChild(this.calendarWeeks.element),this.calendarWeeks=null);void 0!==t.showDaysOfWeek&&(t.showDaysOfWeek?(K(this.dow),this.calendarWeeks&&K(this.calendarWeeks.dow)):(W(this.dow),this.calendarWeeks&&W(this.calendarWeeks.dow))),i&&Array.from(this.dow.children).forEach((e,t)=>{const i=(this.weekStart+t)%7;e.textContent=this.dayNames[i],e.className=this.daysOfWeekDisabled.includes(i)?"dow disabled":"dow"})}updateFocus(){const e=new Date(this.picker.viewDate),t=e.getFullYear(),i=e.getMonth(),s=l(t,i,1),a=g(s,this.weekStart,this.weekStart);this.first=s,this.last=l(t,i+1,0),this.start=a,this.focused=this.picker.viewDate}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e,t&&(this.range=t.dates)}render(){this.today=this.todayHighlight?c():void 0,this.disabled=[...this.datesDisabled];const e=S(this.focused,this.switchLabelFormat,this.locale);if(this.picker.setViewSwitchLabel(e),this.picker.setPrevBtnDisabled(this.first<=this.minDate),this.picker.setNextBtnDisabled(this.last>=this.maxDate),this.calendarWeeks){const e=g(this.first,1,1);Array.from(this.calendarWeeks.weeks.children).forEach((t,i)=>{t.textContent=function(e){const t=g(e,4,1),i=g(new Date(t).setMonth(0,4),4,1);return Math.round((t-i)/6048e5)+1}(h(e,7*i))})}Array.from(this.grid.children).forEach((e,t)=>{const s=e.classList,a=h(this.start,t),n=new Date(a),r=n.getDay();if(e.className=`datepicker-cell ${this.cellClass}`,e.dataset.date=a,e.textContent=n.getDate(),a<this.first?s.add("prev"):a>this.last&&s.add("next"),this.today===a&&s.add("today"),(a<this.minDate||a>this.maxDate||this.disabled.includes(a))&&s.add("disabled"),this.daysOfWeekDisabled.includes(r)&&(s.add("disabled"),i(this.disabled,a)),this.daysOfWeekHighlighted.includes(r)&&s.add("highlighted"),this.range){const[e,t]=this.range;a>e&&a<t&&s.add("range"),a===e&&s.add("range-start"),a===t&&s.add("range-end")}this.selected.includes(a)&&s.add("selected"),a===this.focused&&s.add("focused"),this.beforeShow&&this.performBeforeHook(e,a,a)})}refresh(){const[e,t]=this.range||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(e=>{e.classList.remove("range","range-start","range-end","selected","focused")}),Array.from(this.grid.children).forEach(i=>{const s=Number(i.dataset.date),a=i.classList;s>e&&s<t&&a.add("range"),s===e&&a.add("range-start"),s===t&&a.add("range-end"),this.selected.includes(s)&&a.add("selected"),s===this.focused&&a.add("focused")})}refreshFocus(){const e=Math.round((this.focused-this.start)/864e5);this.grid.querySelectorAll(".focused").forEach(e=>{e.classList.remove("focused")}),this.grid.children[e].classList.add("focused")}}function Q(e,t){if(!e||!e[0]||!e[1])return;const[[i,s],[a,n]]=e;return i>t||a<t?void 0:[i===t?s:-1,a===t?n:12]}class Z extends X{constructor(e){super(e,{id:1,name:"months",cellClass:"month"})}init(e,t=!0){t&&(this.grid=this.element,this.element.classList.add("months","datepicker-grid"),this.grid.appendChild(Y(r("span",12,{"data-month":e=>e})))),super.init(e)}setOptions(t){if(t.locale&&(this.monthNames=t.locale.monthsShort),e(t,"minDate"))if(void 0===t.minDate)this.minYear=this.minMonth=this.minDate=void 0;else{const e=new Date(t.minDate);this.minYear=e.getFullYear(),this.minMonth=e.getMonth(),this.minDate=e.setDate(1)}if(e(t,"maxDate"))if(void 0===t.maxDate)this.maxYear=this.maxMonth=this.maxDate=void 0;else{const e=new Date(t.maxDate);this.maxYear=e.getFullYear(),this.maxMonth=e.getMonth(),this.maxDate=l(this.maxYear,this.maxMonth+1,0)}void 0!==t.beforeShowMonth&&(this.beforeShow="function"==typeof t.beforeShowMonth?t.beforeShowMonth:void 0)}updateFocus(){const e=new Date(this.picker.viewDate);this.year=e.getFullYear(),this.focused=e.getMonth()}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e.reduce((e,t)=>{const s=new Date(t),a=s.getFullYear(),n=s.getMonth();return void 0===e[a]?e[a]=[n]:i(e[a],n),e},{}),t&&t.dates&&(this.range=t.dates.map(e=>{const t=new Date(e);return isNaN(t)?void 0:[t.getFullYear(),t.getMonth()]}))}render(){this.disabled=[],this.picker.setViewSwitchLabel(this.year),this.picker.setPrevBtnDisabled(this.year<=this.minYear),this.picker.setNextBtnDisabled(this.year>=this.maxYear);const e=this.selected[this.year]||[],t=this.year<this.minYear||this.year>this.maxYear,i=this.year===this.minYear,s=this.year===this.maxYear,a=Q(this.range,this.year);Array.from(this.grid.children).forEach((n,r)=>{const d=n.classList,o=l(this.year,r,1);if(n.className=`datepicker-cell ${this.cellClass}`,this.isMinView&&(n.dataset.date=o),n.textContent=this.monthNames[r],(t||i&&r<this.minMonth||s&&r>this.maxMonth)&&d.add("disabled"),a){const[e,t]=a;r>e&&r<t&&d.add("range"),r===e&&d.add("range-start"),r===t&&d.add("range-end")}e.includes(r)&&d.add("selected"),r===this.focused&&d.add("focused"),this.beforeShow&&this.performBeforeHook(n,r,o)})}refresh(){const e=this.selected[this.year]||[],[t,i]=Q(this.range,this.year)||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(e=>{e.classList.remove("range","range-start","range-end","selected","focused")}),Array.from(this.grid.children).forEach((s,a)=>{const n=s.classList;a>t&&a<i&&n.add("range"),a===t&&n.add("range-start"),a===i&&n.add("range-end"),e.includes(a)&&n.add("selected"),a===this.focused&&n.add("focused")})}refreshFocus(){this.grid.querySelectorAll(".focused").forEach(e=>{e.classList.remove("focused")}),this.grid.children[this.focused].classList.add("focused")}}class ee extends X{constructor(e,t){super(e,t)}init(e,t=!0){var i;t&&(this.navStep=10*this.step,this.beforeShowOption=`beforeShow${i=this.cellClass,[...i].reduce((e,t,i)=>e+=i?t:t.toUpperCase(),"")}`,this.grid=this.element,this.element.classList.add(this.name,"datepicker-grid"),this.grid.appendChild(Y(r("span",12)))),super.init(e)}setOptions(t){if(e(t,"minDate")&&(void 0===t.minDate?this.minYear=this.minDate=void 0:(this.minYear=m(t.minDate,this.step),this.minDate=l(this.minYear,0,1))),e(t,"maxDate")&&(void 0===t.maxDate?this.maxYear=this.maxDate=void 0:(this.maxYear=m(t.maxDate,this.step),this.maxDate=l(this.maxYear,11,31))),void 0!==t[this.beforeShowOption]){const e=t[this.beforeShowOption];this.beforeShow="function"==typeof e?e:void 0}}updateFocus(){const e=new Date(this.picker.viewDate),t=m(e,this.navStep),i=t+9*this.step;this.first=t,this.last=i,this.start=t-this.step,this.focused=m(e,this.step)}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e.reduce((e,t)=>i(e,m(t,this.step)),[]),t&&t.dates&&(this.range=t.dates.map(e=>{if(void 0!==e)return m(e,this.step)}))}render(){this.disabled=[],this.picker.setViewSwitchLabel(`${this.first}-${this.last}`),this.picker.setPrevBtnDisabled(this.first<=this.minYear),this.picker.setNextBtnDisabled(this.last>=this.maxYear),Array.from(this.grid.children).forEach((e,t)=>{const i=e.classList,s=this.start+t*this.step,a=l(s,0,1);if(e.className=`datepicker-cell ${this.cellClass}`,this.isMinView&&(e.dataset.date=a),e.textContent=e.dataset.year=s,0===t?i.add("prev"):11===t&&i.add("next"),(s<this.minYear||s>this.maxYear)&&i.add("disabled"),this.range){const[e,t]=this.range;s>e&&s<t&&i.add("range"),s===e&&i.add("range-start"),s===t&&i.add("range-end")}this.selected.includes(s)&&i.add("selected"),s===this.focused&&i.add("focused"),this.beforeShow&&this.performBeforeHook(e,s,a)})}refresh(){const[e,t]=this.range||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(e=>{e.classList.remove("range","range-start","range-end","selected","focused")}),Array.from(this.grid.children).forEach(i=>{const s=Number(i.textContent),a=i.classList;s>e&&s<t&&a.add("range"),s===e&&a.add("range-start"),s===t&&a.add("range-end"),this.selected.includes(s)&&a.add("selected"),s===this.focused&&a.add("focused")})}refreshFocus(){const e=Math.round((this.focused-this.start)/this.step);this.grid.querySelectorAll(".focused").forEach(e=>{e.classList.remove("focused")}),this.grid.children[e].classList.add("focused")}}function te(e,t){const i={date:e.getDate(),viewDate:new Date(e.picker.viewDate),viewId:e.picker.currentView.id,datepicker:e};e.element.dispatchEvent(new CustomEvent(t,{detail:i}))}function ie(e,t){const{minDate:i,maxDate:s}=e.config,{currentView:a,viewDate:r}=e.picker;let d;switch(a.id){case 0:d=u(r,t);break;case 1:d=f(r,t);break;default:d=f(r,t*a.navStep)}d=n(d,i,s),e.picker.changeFocus(d).render()}function se(e){const t=e.picker.currentView.id;t!==e.config.maxView&&e.picker.changeView(t+1).render()}function ae(e){e.config.updateOnBlur?e.update({autohide:!0}):(e.refresh("input"),e.hide())}function ne(e,t){const i=e.picker,s=new Date(i.viewDate),a=i.currentView.id,n=1===a?u(s,t-s.getMonth()):f(s,t-s.getFullYear());i.changeFocus(n).changeView(a-1).render()}function re(t,i){if(void 0!==i.title&&(i.title?(t.controls.title.textContent=i.title,K(t.controls.title)):(t.controls.title.textContent="",W(t.controls.title))),i.prevArrow){const e=t.controls.prevBtn;T(e),i.prevArrow.forEach(t=>{e.appendChild(t.cloneNode(!0))})}if(i.nextArrow){const e=t.controls.nextBtn;T(e),i.nextArrow.forEach(t=>{e.appendChild(t.cloneNode(!0))})}if(i.locale&&(t.controls.todayBtn.textContent=i.locale.today,t.controls.clearBtn.textContent=i.locale.clear),void 0!==i.todayBtn&&(i.todayBtn?K(t.controls.todayBtn):W(t.controls.todayBtn)),e(i,"minDate")||e(i,"maxDate")){const{minDate:e,maxDate:i}=t.datepicker.config;t.controls.todayBtn.disabled=!a(c(),e,i)}void 0!==i.clearBtn&&(i.clearBtn?K(t.controls.clearBtn):W(t.controls.clearBtn))}function de(e){const{dates:i,config:s}=e;return n(i.length>0?t(i):s.defaultViewDate,s.minDate,s.maxDate)}function oe(e,t){const i=new Date(e.viewDate),s=new Date(t),{id:a,year:n,first:r,last:d}=e.currentView,o=s.getFullYear();switch(e.viewDate=t,o!==i.getFullYear()&&te(e.datepicker,"changeYear"),s.getMonth()!==i.getMonth()&&te(e.datepicker,"changeMonth"),a){case 0:return t<r||t>d;case 1:return o!==n;default:return o<r||o>d}}function ce(e){return window.getComputedStyle(e).direction}class le{constructor(e){this.datepicker=e;const t=J.replace(/%buttonClass%/g,e.config.buttonClass),i=this.element=Y(t).firstChild,[s,a,n]=i.firstChild.children,r=s.firstElementChild,[d,o,l]=s.lastElementChild.children,[h,u]=n.firstChild.children,f={title:r,prevBtn:d,viewSwitch:o,nextBtn:l,todayBtn:h,clearBtn:u};this.main=a,this.controls=f;const p=e.inline?"inline":"dropdown";i.classList.add(`datepicker-${p}`),re(this,e.config),this.viewDate=de(e),F(e,[[i,"click",function(e){e.inline||e.config.disableTouchKeyboard||e.inputField.focus()}.bind(null,e),{capture:!0}],[a,"click",function(e,t){const i=N(t,".datepicker-cell");if(!i||i.classList.contains("disabled"))return;const{id:s,isMinView:a}=e.picker.currentView;a?e.setDate(Number(i.dataset.date)):ne(e,1===s?Number(i.dataset.month):Number(i.dataset.year))}.bind(null,e)],[f.viewSwitch,"click",function(e){se(e)}.bind(null,e)],[f.prevBtn,"click",function(e){ie(e,-1)}.bind(null,e)],[f.nextBtn,"click",function(e){ie(e,1)}.bind(null,e)],[f.todayBtn,"click",function(e){const t=e.picker,i=c();if(1===e.config.todayBtnMode){if(e.config.autohide)return void e.setDate(i);e.setDate(i,{render:!1}),t.update()}t.viewDate!==i&&t.changeFocus(i),t.changeView(0).render()}.bind(null,e)],[f.clearBtn,"click",function(e){e.setDate({clear:!0})}.bind(null,e)]]),this.views=[new G(this),new Z(this),new ee(this,{id:2,name:"years",cellClass:"year",step:1}),new ee(this,{id:3,name:"decades",cellClass:"decade",step:10})],this.currentView=this.views[e.config.startView],this.currentView.render(),this.main.appendChild(this.currentView.element),e.config.container.appendChild(this.element)}setOptions(e){re(this,e),this.views.forEach(t=>{t.init(e,!1)}),this.currentView.render()}detach(){this.datepicker.config.container.removeChild(this.element)}show(){if(this.active)return;this.element.classList.add("active"),this.active=!0;const e=this.datepicker;if(!e.inline){const t=ce(e.inputField);t!==ce(e.config.container)?this.element.dir=t:this.element.dir&&this.element.removeAttribute("dir"),this.place(),e.config.disableTouchKeyboard&&e.inputField.blur()}te(e,"show")}hide(){this.active&&(this.datepicker.exitEditMode(),this.element.classList.remove("active"),this.active=!1,te(this.datepicker,"hide"))}place(){const{classList:e,style:t}=this.element,{config:i,inputField:s}=this.datepicker,a=i.container,{width:n,height:r}=this.element.getBoundingClientRect(),{left:d,top:o,width:c}=a.getBoundingClientRect(),{left:l,top:h,width:u,height:f}=s.getBoundingClientRect();let p,g,m,{x:w,y:y}=i.orientation;a===document.body?(p=window.scrollY,g=l+window.scrollX,m=h+p):(g=l-d,m=h-o+(p=a.scrollTop)),"auto"===w&&(g<0?(w="left",g=10):w=g+n>c?"right":"rtl"===ce(s)?"right":"left"),"right"===w&&(g-=n-u),"auto"===y&&(y=m-r<p?"bottom":"top"),"top"===y?m-=r:m+=f,e.remove("datepicker-orient-top","datepicker-orient-bottom","datepicker-orient-right","datepicker-orient-left"),e.add(`datepicker-orient-${y}`,`datepicker-orient-${w}`),t.top=m?`${m}px`:m,t.left=g?`${g}px`:g}setViewSwitchLabel(e){this.controls.viewSwitch.textContent=e}setPrevBtnDisabled(e){this.controls.prevBtn.disabled=e}setNextBtnDisabled(e){this.controls.nextBtn.disabled=e}changeView(e){const t=this.currentView,i=this.views[e];return i.id!==t.id&&(this.currentView=i,this._renderMethod="render",te(this.datepicker,"changeView"),this.main.replaceChild(i.element,t.element)),this}changeFocus(e){return this._renderMethod=oe(this,e)?"render":"refreshFocus",this.views.forEach(e=>{e.updateFocus()}),this}update(){const e=de(this.datepicker);return this._renderMethod=oe(this,e)?"render":"refresh",this.views.forEach(e=>{e.updateFocus(),e.updateSelection()}),this}render(e=!0){const t=e&&this._renderMethod||"render";delete this._renderMethod,this.currentView[t]()}}function he(e,t,i,s){const n=e.picker,r=n.currentView,d=r.step||1;let o,c,l=n.viewDate;switch(r.id){case 0:l=s?h(l,7*i):t.ctrlKey||t.metaKey?f(l,i):h(l,i),o=h,c=(e=>r.disabled.includes(e));break;case 1:l=u(l,s?4*i:i),o=u,c=(e=>{const t=new Date(e),{year:i,disabled:s}=r;return t.getFullYear()===i&&s.includes(t.getMonth())});break;default:l=f(l,i*(s?4:1)*d),o=f,c=(e=>r.disabled.includes(m(e,d)))}void 0!==(l=function e(t,i,s,n,r,d){if(a(t,r,d))return n(t)?e(i(t,s),i,s,n,r,d):t}(l,o,i<0?-d:d,c,r.minDate,r.maxDate))&&n.changeFocus(l).render()}function ue(e,t){return e.map(e=>S(e,t.format,t.locale)).join(t.dateDelimiter)}function fe(e,t,i=!1){const{config:s,dates:n,rangepicker:r}=e;if(0===t.length)return i?[]:void 0;const d=r&&e===r.datepickers[1];let o=t.reduce((e,t)=>{let i=M(t,s.format,s.locale);if(void 0===i)return e;if(s.pickLevel>0){const e=new Date(i);i=1===s.pickLevel?d?e.setMonth(e.getMonth()+1,0):e.setDate(1):d?e.setFullYear(e.getFullYear()+1,0,0):e.setMonth(0,1)}return!a(i,s.minDate,s.maxDate)||e.includes(i)||s.datesDisabled.includes(i)||s.daysOfWeekDisabled.includes(new Date(i).getDay())||e.push(i),e},[]);return 0!==o.length?(s.multidate&&!i&&(o=o.reduce((e,t)=>(n.includes(t)||e.push(t),e),n.filter(e=>!o.includes(e)))),s.maxNumberOfDates&&o.length>s.maxNumberOfDates?o.slice(-1*s.maxNumberOfDates):o):void 0}function pe(e,t=3,i=!0){const{config:s,picker:a,inputField:n}=e;if(2&t){const e=a.active?s.pickLevel:s.startView;a.update().changeView(e).render(i)}1&t&&n&&(n.value=ue(e.dates,s))}function ge(e,t,i){let{clear:s,render:a,autohide:n}=i;void 0===a&&(a=!0),a?void 0===n&&(n=e.config.autohide):n=!1;const r=fe(e,t,s);r&&(r.toString()!==e.dates.toString()?(e.dates=r,pe(e,a?3:1),te(e,"changeDate")):pe(e,1),n&&e.hide())}class me{constructor(e,t={},i){e.datepicker=this,this.element=e;const a=this.config=Object.assign({buttonClass:t.buttonClass&&String(t.buttonClass)||"button",container:document.body,defaultViewDate:c(),maxDate:void 0,minDate:void 0},q(B,this));this._options=t,Object.assign(a,q(t,this));const n=this.inline="INPUT"!==e.tagName;let r,d;if(n)a.container=e,d=s(e.dataset.date,a.dateDelimiter),delete e.dataset.date;else{const i=t.container?document.querySelector(t.container):null;i&&(a.container=i),(r=this.inputField=e).classList.add("datepicker-input"),d=s(r.value,a.dateDelimiter)}if(i){const e=i.inputs.indexOf(r),t=i.datepickers;if(e<0||e>1||!Array.isArray(t))throw Error("Invalid rangepicker object.");t[e]=this,Object.defineProperty(this,"rangepicker",{get:()=>i})}this.dates=fe(this,d)||[],r&&(r.value=ue(this.dates,a));const o=this.picker=new le(this);if(n)this.show();else{const e=function(e,t){const i=e.element;if(i!==document.activeElement)return;const s=e.picker.element;N(t,e=>e===i||e===s)||ae(e)}.bind(null,this);F(this,[[r,"keydown",function(e,t){if("Tab"===t.key)return void ae(e);const i=e.picker,{id:s,isMinView:a}=i.currentView;if(i.active)if(e.editMode)switch(t.key){case"Escape":i.hide();break;case"Enter":e.exitEditMode({update:!0,autohide:e.config.autohide});break;default:return}else switch(t.key){case"Escape":i.hide();break;case"ArrowLeft":if(t.ctrlKey||t.metaKey)ie(e,-1);else{if(t.shiftKey)return void e.enterEditMode();he(e,t,-1,!1)}break;case"ArrowRight":if(t.ctrlKey||t.metaKey)ie(e,1);else{if(t.shiftKey)return void e.enterEditMode();he(e,t,1,!1)}break;case"ArrowUp":if(t.ctrlKey||t.metaKey)se(e);else{if(t.shiftKey)return void e.enterEditMode();he(e,t,-1,!0)}break;case"ArrowDown":if(t.shiftKey&&!t.ctrlKey&&!t.metaKey)return void e.enterEditMode();he(e,t,1,!0);break;case"Enter":a?e.setDate(i.viewDate):i.changeView(s-1).render();break;case"Backspace":case"Delete":return void e.enterEditMode();default:return void(1!==t.key.length||t.ctrlKey||t.metaKey||e.enterEditMode())}else switch(t.key){case"ArrowDown":case"Escape":i.show();break;case"Enter":e.update();break;default:return}t.preventDefault(),t.stopPropagation()}.bind(null,this)],[r,"focus",function(e){e.config.showOnFocus&&e.show()}.bind(null,this)],[r,"mousedown",function(e,t){const i=t.target;(e.picker.active||e.config.showOnClick)&&(i._active=i===document.activeElement,i._clicking=setTimeout(()=>{delete i._active,delete i._clicking},2e3))}.bind(null,this)],[r,"click",function(e,t){const i=t.target;i._clicking&&(clearTimeout(i._clicking),delete i._clicking,i._active&&e.enterEditMode(),delete i._active,e.config.showOnClick&&e.show())}.bind(null,this)],[r,"paste",function(e,t){t.clipboardData.types.includes("text/plain")&&e.enterEditMode()}.bind(null,this)],[document,"mousedown",e],[document,"touchstart",e],[window,"resize",o.place.bind(o)]])}}static formatDate(e,t,i){return S(e,t,i&&L[i]||L.en)}static parseDate(e,t,i){return M(e,t,i&&L[i]||L.en)}static get locales(){return L}get active(){return!(!this.picker||!this.picker.active)}get pickerElement(){return this.picker?this.picker.element:void 0}setOptions(e){const t=this.picker,i=q(e,this);Object.assign(this._options,e),Object.assign(this.config,i),t.setOptions(i),pe(this,3)}show(){this.inputField&&this.inputField.disabled||this.picker.show()}hide(){this.inline||(this.picker.hide(),this.picker.update().changeView(this.config.startView).render())}destroy(){return this.hide(),V(this),this.picker.detach(),this.inline||this.inputField.classList.remove("datepicker-input"),delete this.element.datepicker,this}getDate(e){const t=e?t=>S(t,e,this.config.locale):e=>new Date(e);return this.config.multidate?this.dates.map(t):this.dates.length>0?t(this.dates[0]):void 0}setDate(...e){const i=[...e],s={},a=t(e);"object"!=typeof a||Array.isArray(a)||a instanceof Date||!a||Object.assign(s,i.pop()),ge(this,Array.isArray(i[0])?i[0]:i,s)}update(e){if(this.inline)return;const t={clear:!0,autohide:!(!e||!e.autohide)};ge(this,s(this.inputField.value,this.config.dateDelimiter),t)}refresh(e,t=!1){let i;e&&"string"!=typeof e&&(t=e,e=void 0),pe(this,i="picker"===e?2:"input"===e?1:3,!t)}enterEditMode(){this.inline||!this.picker.active||this.editMode||(this.editMode=!0,this.inputField.classList.add("in-edit"))}exitEditMode(e){if(this.inline||!this.editMode)return;const t=Object.assign({update:!1},e);delete this.editMode,this.inputField.classList.remove("in-edit"),t.update&&this.update(t)}}function we(e){const t=Object.assign({},e);return delete t.inputs,delete t.allowOneSidedRange,delete t.maxNumberOfDates,t}function ye(e,t,i,s){F(e,[[i,"changeDate",t]]),new me(i,s,e)}function ke(e,t){if(e._updating)return;e._updating=!0;const i=t.target;if(void 0===i.datepicker)return;const s=e.datepickers,a={render:!1},n=e.inputs.indexOf(i),r=0===n?1:0,d=s[n].dates[0],o=s[r].dates[0];void 0!==d&&void 0!==o?0===n&&d>o?(s[0].setDate(o,a),s[1].setDate(d,a)):1===n&&d<o&&(s[0].setDate(d,a),s[1].setDate(o,a)):e.allowOneSidedRange||void 0===d&&void 0===o||(a.clear=!0,s[r].setDate(s[n].dates,a)),s[0].picker.update().render(),s[1].picker.update().render(),delete e._updating}window.Datepicker=me,window.DateRangePicker=class{constructor(e,t={}){const i=Array.isArray(t.inputs)?t.inputs:Array.from(e.querySelectorAll("input"));if(i.length<2)return;e.rangepicker=this,this.element=e,this.inputs=i.slice(0,2),this.allowOneSidedRange=!!t.allowOneSidedRange;const s=ke.bind(null,this),a=we(t),n=[];Object.defineProperty(this,"datepickers",{get:()=>n}),ye(this,s,this.inputs[0],a),ye(this,s,this.inputs[1],a),Object.freeze(n),n[0].dates.length>0?ke(this,{target:this.inputs[0]}):n[1].dates.length>0&&ke(this,{target:this.inputs[1]})}get dates(){return 2===this.datepickers.length?[this.datepickers[0].dates[0],this.datepickers[1].dates[0]]:void 0}setOptions(e){this.allowOneSidedRange=!!e.allowOneSidedRange;const t=we(e);this.datepickers[0].setOptions(t),this.datepickers[1].setOptions(t)}destroy(){this.datepickers[0].destroy(),this.datepickers[1].destroy(),V(this),delete this.element.rangepicker}getDates(e){const t=e?t=>S(t,e,this.datepickers[0].config.locale):e=>new Date(e);return this.dates.map(e=>void 0===e?e:t(e))}setDates(e,t){const[i,s]=this.datepickers,a=this.dates;this._updating=!0,i.setDate(e),s.setDate(t),delete this._updating,s.dates[0]!==a[1]?ke(this,{target:this.inputs[1]}):i.dates[0]!==a[0]&&ke(this,{target:this.inputs[0]})}}}();
}

// Polyfill closest
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
if (!Element.prototype.closest) {
	Element.prototype.closest = function(s) {
		var el = this;
		do {
			if (Element.prototype.matches.call(el, s)) return el;
			el = el.parentElement || el.parentNode;
		} while (el !== null && el.nodeType === 1);
		return null;
	};
}

// Polyfill entries
if(!Object.entries) {
	Object.entries = function(obj) {
		return Object.keys(obj).reduce(function(arr, key) {
			arr.push([key, obj[key]]);
			return arr;
		}, []);
	}
}

var getSiblings = function(e) {
	// for collecting siblings
	let siblings = []; 
	// if no parent, return no sibling
	if(!e.parentNode) {
		return siblings;
	}
	// first child of the parent node
	let sibling  = e.parentNode.firstChild;
	// collecting siblings
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== e) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling;
	}
	return siblings;
};

function numberWithCommas(num){
	var len, point, str; 
	num = num + ""; 
	point = num.length % 3 ;
	len = num.length; 

	str = num.substring(0, point); 
	while (point < len) { 
		if (str != "") str += ","; 
		str += num.substring(point, point + 3); 
		point += 3; 
	}
	return str;
}


// buiToggle
(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], function () {
			return factory(root);
		});
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.buiToggle = factory(root);
	}
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

	'use strict';

	//
	// Variables
	//
	var defaults = {
		// general
		mode: 'normal',
		event: 'click',
		active: false,
		activeClass: 'active',

		disabled: false,
		disabledClass: null,

		focusin: false,
		focusout: false,

		clickout: false,
		clickoutTarget: null,

		// target
		target: null,
		targetClass: 'bui-toggle-target',
		targetActiveClass: 'active',
		targetAttribute: 'data-toggle-target',
		targetObject: null,

		// close
		close: false,
		closeButton: 'button',
		closeButtonClass: 'close',
		closeButtonText: 'close',
		closeButtonArea: null,

		// react target
		reactTarget: null,
		reactTargetClass: null,
		reactTargetActiveClass: 'active',

		// react Parent
		reactParent: null,
		reactParentClass: null,
		reactParentActiveClass: 'active',

		tooltipPosition: 'fixed',
		tooltipContainer: '#page',
		tooltipArrow: false,
		tooltipArrowClass: 'tooltip-arrow',

		/* callback */
		onloadCallBack: function() {return false;},
		eventCallBack: function() {return false;},
		activeCallBack: function() {return false;},
		inactiveCallBack: function() {return false;}
	};

	//
	// Methods
	//

	/**
	 * Merge two or more objects together.
	 * @param   {Object}   objects  The objects to merge together
	 * @returns {Object}            Merged values of defaults and options
	 */
	var extend = function () {
		var merged = {};
		Array.prototype.forEach.call(arguments, function (obj) {
			for (var key in obj) {
				if (!obj.hasOwnProperty(key)) return;
				merged[key] = obj[key];
			}
		});
		return merged;
	};


	var active = function (settings, toggleTarget, toggleButton) {
		toggleTarget.classList.add(settings.activeClass);
		
		settings.reactTarget != null ? document.querySelector(settings.reactTarget).classList.add(settings.reactTargetActiveClass) : null;
		settings.reactParent != null ? toggleTarget.closest(settings.reactParent).classList.add(settings.reactParentActiveClass) : null;

		if(settings.focusin === true) {
			focusin(toggleTarget);
		}

		var activeButtons = document.querySelectorAll(toggleButton);
		Array.prototype.forEach.call(activeButtons, function(activeButton) {
			activeButton.classList.add(settings.activeClass);
		});
		settings.activeCallBack.call(toggleTarget, toggleButton);
	};
	
	var inactive = function (settings, toggleTarget, toggleButton) {
		toggleTarget.classList.remove(settings.activeClass);

		settings.reactTarget != null ? document.querySelector(settings.reactTarget).classList.remove(settings.reactTargetActiveClass) : null;
		settings.reactParent != null ? toggleTarget.closest(settings.reactParent).classList.remove(settings.reactParentActiveClass) : null;

		var inactiveButtons = document.querySelectorAll(toggleButton);
		Array.prototype.forEach.call(inactiveButtons, function(inactiveButton) {
			inactiveButton.classList.remove(settings.activeClass);
		});

		settings.inactiveCallBack.call(toggleTarget, toggleButton);
	};

	var createInactiveButton = function(settings, name, toggleTarget, toggleButton) {
		var button = document.createElement('button');
		button.setAttribute('type', 'button');
		button.dataset.buiToggleCancel = name;
		button.className = settings.closeButtonClass;
		button.innerHTML = settings.closeButtonText;
		
		(settings.closeButtonArea === null) ? toggleTarget.appendChild(button) : toggleTarget.querySelector(settings.closeButtonArea).appendChild(button);

		button.addEventListener('click', function(event) {
			event.preventDefault();
			inactive(settings, toggleTarget, toggleButton)
		}, false);
	};

	var clickout = function(settings, toggleTarget, toggleButton) {
		var clickoutTarget = settings.clickoutTarget != null ? toggleTarget.querySelector(settings.clickoutTarget) : toggleTarget;
		document.addEventListener('mouseup', function(event) {
			if(toggleTarget.classList.contains(settings.activeClass) === true) {
				if (!clickoutTarget.contains(event.target)) {
					inactive(settings, toggleTarget, toggleButton);
				}
			}
		});
	};

	var focusin = function(toggleTarget) {
		toggleTarget.setAttribute('tabindex', '-1');
		toggleTarget.focus();
	};

	var focusout = function(settings, toggleTarget, toggleButton) {
		var activeElement = toggleTarget.querySelectorAll('a, input, button, select, textarea');
		Array.prototype.forEach.call(activeElement, function(value, index) {
			value.addEventListener('keydown', function(event) {
				if(event.keyCode === 9) {
					if(index === activeElement.length - 1) {
						inactive(settings, toggleTarget, toggleButton);
					}
				}
			}, false);
		});
	};

	function tooltipActions(settings, toggleTarget, toggleButton, tooltipArrow) {
		toggleTarget.style.top = toggleButton.getBoundingClientRect().top + window.pageYOffset + 'px';
		toggleTarget.style.left = (toggleButton.getBoundingClientRect().left + toggleButton.getBoundingClientRect().width / 2) - (toggleTarget.getBoundingClientRect().width / 2) + 'px';
	};
	
	function tooltip(settings, toggleTarget, toggleButton) {
		var tooltipArrow;
		if(settings.tooltipArrow === true) {
			if(toggleTarget.querySelector('.' + settings.tooltipArrowClass)) {
				tooltipArrow = toggleTarget.querySelector('.' + settings.tooltipArrowClass);
			} else {
				tooltipArrow = document.createElement('span');
				tooltipArrow.className = settings.tooltipArrowClass;
				toggleTarget.append(tooltipArrow);
			}
		}
		tooltipActions(settings, toggleTarget, toggleButton, tooltipArrow);

		window.addEventListener('resize', function() {
			tooltipActions(settings, toggleTarget, toggleButton, tooltipArrow);
		});
	}


	/**
	 * Create the Constructor object
	 */
	var Constructor = function (selector, options) {

		// Merge user options with defaults
		settings = extend(defaults, options || {});
		var publicAPIs = {};
		var settings;
		var toggleItems;
		
		publicAPIs.itemEntry = [];

		/**
		 * BuiToggle 관련 함수를 적용할 객체 생성
		 */
		 publicAPIs.createProperties = function(name, target, button) {
			this.name = name;
			this.target = target;
			this.button = button;
		};

		publicAPIs.active = function(toggleName) {
			active(settings, publicAPIs.itemEntry[toggleName].target, publicAPIs.itemEntry[toggleName].button);
		};

		publicAPIs.inactive = function(toggleName) {
			inactive(settings, publicAPIs.itemEntry[toggleName].target, publicAPIs.itemEntry[toggleName].button);
		};

		publicAPIs.toggle = function(toggleName) {
			if(publicAPIs.itemEntry[toggleName].target.classList.contains(settings.activeClass)) {
				publicAPIs.inactive(publicAPIs.itemEntry[toggleName].name);
			} else {
				publicAPIs.active(publicAPIs.itemEntry[toggleName].name);
			}
		};

		/**
		 * Setup the DOM with the proper attributes
		 */
		publicAPIs.getProperties = function(selector) {
			var name = selector;
			var target = document.getElementById(selector);
			var button = settings.mode === 'tooltip' ? '[data-bui-tooltip-button="' + selector + '"]' : button = '[data-bui-toggle-button="' + selector + '"]';
			publicAPIs.itemEntry[selector] = new publicAPIs.createProperties(name, target, button);
		};

		publicAPIs.appendToggle = function(item) {
			publicAPIs.getProperties(item);
			publicAPIs.actions(item);
		};

		publicAPIs.actions = function(item) {
			var toggleButtons = document.querySelectorAll(publicAPIs.itemEntry[item].button);
			if (!toggleButtons) return;

			Array.prototype.forEach.call(toggleButtons, function(toggleButton) {
				if (settings.event === 'click') {
					toggleButton.addEventListener('click', function(event) {
						event.preventDefault();
						!publicAPIs.itemEntry[item].target.classList.contains('disabled') ? publicAPIs.toggle(publicAPIs.itemEntry[item].name) : null;
						if(settings.mode === 'tooltip') {
							tooltip(settings, publicAPIs.itemEntry[item].target, toggleButton);
						};
					}, false);
				}
				if (settings.event === 'hover') {
					toggleButton.addEventListener('mouseenter', function(event) {
						publicAPIs.active(publicAPIs.itemEntry[item].name);
						if(settings.mode === 'tooltip') {
							tooltip(settings, publicAPIs.itemEntry[item].target, toggleButton);
						};
					}, false);
					toggleButton.addEventListener('mouseleave', function() {
						publicAPIs.inactive(publicAPIs.itemEntry[item].name);
					}, false);	
				}

				if (settings.event === 'none') {
					document.addEventListener('DOMContentLoaded', function() {
						if(settings.mode === 'tooltip') {
							tooltip(settings, publicAPIs.itemEntry[item].target, toggleButtons[0]);
							console.log(toggleButtons[0]);
						};
					});
				}
			});

			var toggleInactive = publicAPIs.itemEntry[item].target.querySelectorAll('[data-bui-toggle-inactive]');
			if (!toggleInactive) return;

			Array.prototype.forEach.call(toggleInactive, function(inactiveButton) {
				inactiveButton.addEventListener('click', function(event) {
					event.preventDefault();
					!publicAPIs.itemEntry[item].target.classList.contains('disabled') ? publicAPIs.toggle(publicAPIs.itemEntry[item].name) : null;
				}, false);
			});
			
			settings.close === true ? createInactiveButton(settings, publicAPIs.itemEntry[item].name, publicAPIs.itemEntry[item].target, publicAPIs.itemEntry[item].button) : null;
			settings.clickout === true ? clickout(settings, publicAPIs.itemEntry[item].target, publicAPIs.itemEntry[item].button) : null;
			settings.focusout === true ? focusout(settings, publicAPIs.itemEntry[item].target, publicAPIs.itemEntry[item].button) : null;
			settings.onloadCallBack.call(publicAPIs.itemEntry[item].target);
		};

		publicAPIs.setup = function() {
			var findItems = document.querySelectorAll(selector);
			if (!findItems) return;
			Array.prototype.forEach.call(findItems, function(findItem) {
				publicAPIs.getProperties(findItem.id);
			});
		};

		publicAPIs.playActions = function() {
			for(const [key, value] of Object.entries(publicAPIs.itemEntry)) {
				publicAPIs.actions(key);
			}
		};;

		/**
		 * Handle click events
		 */
		var eventHandler = function(event) {
		};

		/**
		 * Initialize the instance
		 */
		var init = function () {
			// Setup the DOM
			publicAPIs.setup();
			publicAPIs.playActions();
		};

		// Initialize and return the Public APIs
		init();
		return publicAPIs;
	};

	// Return the Constructor
	return Constructor;
});


/**
 * buiTab
 */
(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], function () {
			return factory(root);
		});
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.buiTab = factory(root);
	}
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

	'use strict';

	// Variables
	var defaults = {
		// general
		mode: 'normal',
		active: false,
		activeClass: 'current',
		initial: 0,

		// tab
		tabItem: '.tab-item',
		tabName: '.tab-name',
		buttonActiveText: null,
		buttonAppendTo: null,
		tabItemReact: false,

		// target
		target: null,
		targetClass: 'bui-tab-target',
		targetActiveClass: 'active',
		container: '.tab-content',

		/* callback */
		onloadCallBack: function() {return false;},
		eventCallBack: function() {return false;},
		activeCallBack: function() {return false;},
		inactiveCallBack: function() {return false;}
	};

	/**
	 * Merge two or more objects together.
	 * @param	{Object}	objects		The objects to merge together
	 * @returns	{Object}				Merged values of defaults and options
	 */
	var extend = function () {
		var merged = {};
		Array.prototype.forEach.call(arguments, function (obj) {
			for (var key in obj) {
				if (!obj.hasOwnProperty(key)) return;
				merged[key] = obj[key];
			}
		});
		return merged;

	};



	var tabToggle = function(settings, tabs) {
		tabs.item.classList.add(settings.activeClass);
		tabs.item.setAttribute('title', '현재 선택된 항목');

		Array.prototype.forEach.call(getSiblings(tabs.item), function(siblingsItem) {
			siblingsItem.classList.remove(settings.activeClass);
			siblingsItem.removeAttribute('title');
		});

		if(tabs.target != null) {
			tabs.target.classList.add(settings.targetActiveClass);
			Array.prototype.forEach.call(getSiblings(tabs.target), function(siblingsItem) {
				siblingsItem.classList.remove(settings.targetActiveClass);
			});
		}

		if (settings.tabItemReact != false) {
			var items = tabs.item;
			var left = items.offsetLeft + items.clientWidth + 16;
			var move = left - window.outerWidth;

			if (window.outerWidth < left) {
				items.parentElement.parentElement.scrollTo(move, 0);
			} else{
				items.parentElement.parentElement.scrollTo(0, 0);
			}
		}
	}

	var tabItemReact = function(settings, selectItems) {
		if (settings.tabItemReact != false) {
			Array.prototype.forEach.call(selectItems, function(list, index) {
				var items = list.querySelector('.' + settings.activeClass);
				var left = items.offsetLeft + items.clientWidth + 16;
				var move = left - window.outerWidth;
				items.parentElement.parentElement.style.scrollBehavior = 'smooth';

				if (window.outerWidth < left) {
					items.parentElement.parentElement.scrollTo(move, 0);
				} else{
					items.parentElement.parentElement.scrollTo(0, 0);
				}
			});
		}
	}

	/**
	 * Create the Constructor object
	 */
	var Constructor = function (selector, options) {

		// Merge user options with defaults
		settings = extend(defaults, options || {});

		// Variables
		var publicAPIs = {};
		var settings;

		publicAPIs.itemEntry = [];

		/**
		 * BuiToggle 관련 함수를 적용할 객체 생성
		 * 
		 * @method options
		 * @param {String} object		실제로 바인딩이 될 엘리먼트 객체
		 * @param {String} objectAct	액션 종류
		 */

		 publicAPIs.createProperties = function(item, name, target) {
			this.item = item;
			this.name = name;
			this.target = target;
		};

		/**
		 * Setup the DOM with the proper attributes
		 */
		publicAPIs.setup = function() {
			// Variables
			var selectItems = document.querySelectorAll(selector);
			if (!selectItems) return;
			
			Array.prototype.forEach.call(selectItems, function(list, index) {
				var listEntry = [];
				var initial = settings.initial;
				var items = list.querySelectorAll(settings.tabItem);

				Array.prototype.forEach.call(items, function(item, index) {
					var name = item.querySelector(settings.tabName);
					var target = document.querySelector(name.getAttribute('href'));
					listEntry[index] = new publicAPIs.createProperties(item, name, target);
					item.classList.contains(settings.activeClass) ? initial = index : null;
				});

				// actions
				Array.prototype.forEach.call(listEntry, function(tabs, index) {
					tabs.target != null ? tabs.target.classList.add(settings.targetClass) : null;
					initial === index ? tabToggle(settings, tabs) : null;
					tabs.name.addEventListener('click', function(e) {
						
						settings.eventCallBack.call();

						settings.mode != 'null' ? e.preventDefault() : null;
						// after click
						if(settings.mode === 'scroll') {
							tabs.target.closest(settings.container).scrollTo({
								top: tabs.target.offsetTop,
								behavior: 'smooth'
							});
						} else {
							tabToggle(settings, tabs);
						}
					});

					// after scroll
					if(settings.mode === 'scroll') {
						// closest 으로 변경
						tabs.target.closest(settings.container).addEventListener('scroll', function(event) {
							if(this.scrollTop + 48 >= tabs.target.offsetTop && this.scrollTop + 48 < tabs.target.offsetTop + tabs.target.offsetHeight) {
								tabToggle(settings, tabs);
							}
						});
					}
				});
			});

			tabItemReact(settings, selectItems);
		};

		/**
		 * Initialize the instance
		 */
		var init = function () {
			// Setup the DOM
			publicAPIs.setup();
		};

		// Initialize and return the Public APIs
		init();
		return publicAPIs;
	};

	// Return the Constructor
	return Constructor;
});

/**
 * buiFold
 */
(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], function () {
			return factory(root);
		});
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.buiFold = factory(root);
	}
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

	'use strict';

	// Variables
	var defaults = {
		// general
		active: false,
		activeClass: 'active',
		initial: 0,

		ellipsis: false,
		ellipsisLimit: 2,
		ellipsisField: '',
		ellipsisActiveClass: 'limit',

		// target
		target: null,
		targetClass: 'bui-fold-target',
		targetActiveClass: 'active',

		// close
		button: 'button',
		buttonClass: 'fold',
		buttonActiveClass: 'active',
		buttonText: '열기',
		buttonActiveText: null,
		buttonAppendTo: null,

		// accordion
		accordion: false,

		/* callback */
		onloadCallBack: function() {return false;},
		eventCallBack: function() {return false;},
		activeCallBack: function() {return false;},
		inactiveCallBack: function() {return false;}
	};

	/**
	 * Merge two or more objects together.
	 * @param	{Object}	objects		The objects to merge together
	 * @returns	{Object}				Merged values of defaults and options
	 */
	var extend = function () {
		var merged = {};
		Array.prototype.forEach.call(arguments, function (obj) {
			for (var key in obj) {
				if (!obj.hasOwnProperty(key)) return;
				merged[key] = obj[key];
			}
		});
		return merged;
	};

	/**
	 * Active a tab and its content
	 * @param	{Object}	settings		User settings and options
	 * @param	{Node}		toggleTarget	The tab content
	 */
	var actionActive = function(settings, toggleTarget, toggleButton) {
		// var toggleButton = toggleTarget.querySelector('button[class="' + settings.buttonClass + '"]');
		toggleTarget.classList.add(settings.activeClass);
		toggleButton.classList.add(settings.buttonActiveClass);
		settings.buttonActiveText != null ?  toggleButton.innerHTML = settings.buttonActiveText : null;
	};

	/**
	 * Inactive a Item and its content
	 * @param	{Object}	settings		User settings and options
	 * @param	{Node}		toggleTarget	The tab content
	 */
	var actionInactive = function(settings, toggleTarget, toggleButton) {
		// var toggleButton = toggleTarget.querySelector('button[class="' + settings.buttonClass + '"]');
		toggleTarget.classList.remove(settings.activeClass);
		toggleButton.classList.remove(settings.buttonActiveClass);
		settings.buttonActiveText != null ? toggleButton.innerHTML = settings.buttonText : null;
	};

	var ellipsis = function(settings, toggleTarget) {
		var field = toggleTarget.querySelector(settings.ellipsisField); 
		var containerHeight = field.offsetHeight 
		var lineHeight = parseInt(window.getComputedStyle(field).getPropertyValue('line-height')); 
		var lines = containerHeight / lineHeight;

		if (lines > settings.ellipsisLimit) {
			toggleTarget.classList.add(settings.ellipsisActiveClass);
		} else {
			toggleTarget.classList.remove(settings.ellipsisActiveClass);
		}
	};

	/**
	 * Create the Constructor object
	 */
	var Constructor = function (selector, options) {

		// Merge user options with defaults
		settings = extend(defaults, options || {});

		// Variables
		var publicAPIs = {};
		var settings;

		/**
		 * Setup the DOM with the proper attributes
		 */
		publicAPIs.setup = function() {

			// Variables
			var selectItems = document.querySelectorAll(selector);
			if (!selectItems) return;

			Array.prototype.forEach.call(selectItems, function(toggleTarget) {

				toggleTarget.classList.add(settings.targetClass);

				// Setup Toggle Button
				var toggleButton = document.createElement('button');
				toggleButton.setAttribute('type', 'button');
				toggleButton.className = settings.buttonClass;
				toggleButton.innerHTML = settings.buttonText;

				// settings.buttonAppendTo != null ? toggleTarget.querySelector(settings.buttonAppendTo).appendChild(toggleButton) : toggleTarget.appendChild(toggleButton);

				if(settings.buttonAppendTo != null) {
					if(toggleTarget.querySelector(settings.buttonAppendTo)) {
						toggleTarget.querySelector(settings.buttonAppendTo).appendChild(toggleButton);
					}
				} else {
					toggleTarget.appendChild(toggleButton);
				};

				toggleButton.addEventListener('click', function(e) {
					if (settings.accordion === true) {
						if(toggleTarget.classList.contains(settings.activeClass)) {
							actionInactive(settings, toggleTarget, toggleButton);
						} else {
							actionActive(settings, toggleTarget, toggleButton);
							var siblings = getSiblings(toggleTarget);
							Array.prototype.forEach.call(siblings, function(siblingItem) {	
								if(siblingItem.classList.contains(settings.targetClass)) {
									actionInactive(settings, siblingItem);
								}
							});
						}
					} else {
						toggleTarget.classList.contains(settings.activeClass) ? actionInactive(settings, toggleTarget, toggleButton) : actionActive(settings, toggleTarget, toggleButton);
					}

					settings.eventCallBack.call(toggleTarget, toggleButton);
				});

				if(settings.accordion === true) {
					actionActive(settings, selectItems[settings.initial]);
				} else {
					toggleTarget.classList.contains(settings.targetActiveClass) ? actionActive(settings, toggleTarget, toggleButton) : null;
				}

				if(settings.ellipsis === true) {
					ellipsis(settings, toggleTarget);
					window.addEventListener('resize', function() {
						ellipsis(settings, toggleTarget);
					}, false);
				}
			});

		};
		/**
		 * Initialize the instance
		 */
		var init = function () {
			// Setup the DOM
			publicAPIs.setup();
		};

		// Initialize and return the Public APIs
		init();
		return publicAPIs;
	};

	// Return the Constructor
	return Constructor;
});



/**
 * buiNavi
 */
(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], function () {
			return factory(root);
		});
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.buiNavi = factory(root);
	}
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

	'use strict';

	// Variables
	var defaults = {
		// navigations
		list: '.navi-list',
		item: '.navi-item',
		name: '.navi-name',

		event: 'hover',

		// general
		initial: 0,
		activeClass: 'active',
		currentClass: 'current',

		/* react target */
		reactTarget: 'body',
		reactClass: null,
		reactActiveClass: 'active',

		/* button */
		button: false,
		buttonClass: 'fold',
		// closeButtonText: '',
		buttonTextActive: 'close',
		buttonTextInactive: 'open',
		buttonArea: null,

		// accordion
		accordion: false,

		/* callback */
		onloadCallBack: function() {return false;},
		eventCallBack: function() {return false;},
		activeCallBack: function() {return false;},
		inactiveCallBack: function() {return false;}
	};

	/**
	 * Merge two or more objects together.
	 * @param	{Object}	objects		The objects to merge together
	 * @returns	{Object}				Merged values of defaults and options
	 */
	var extend = function () {
		var merged = {};
		Array.prototype.forEach.call(arguments, function (obj) {
			for (var key in obj) {
				if (!obj.hasOwnProperty(key)) return;
				merged[key] = obj[key];
			}
		});
		return merged;
	};


	var appendButtons = function(settings, naviItem, index) {
		var toggleButton = document.createElement('button');
		var buttonArea = naviItem.querySelector(settings.buttonArea);
		toggleButton.className = settings.buttonClass;
		toggleButton.innerHTML = settings.buttonTextInactive;
		naviItem.insertBefore(toggleButton, buttonArea);

		if(naviItem.classList.contains(settings.activeClass) === true) {
			toggleButton.innerHTML = settings.buttonTextActive;
		} else {
			toggleButton.innerHTML = settings.buttonTextInactive;
		}

		toggleButton.addEventListener('click', function() {
			if(naviItem.classList.contains(settings.activeClass) === true) {
				naviItem.classList.remove(settings.activeClass);
				toggleButton.innerHTML = settings.buttonTextInactive;
			} else {
				naviItem.classList.add(settings.activeClass);
				toggleButton.innerHTML = settings.buttonTextActive;
			}
		});
	}




	/**
	 * Create the Constructor object
	 */
	var Constructor = function (selector, options) {

		// Merge user options with defaults
		settings = extend(defaults, options || {});

		// Variables
		var publicAPIs = {};
		var settings;

		/**
		 * Setup the DOM with the proper attributes
		 */
		publicAPIs.setup = function() {

			// Variables
			var navigations = document.querySelectorAll(selector);
			if (!navigations) return;

			Array.prototype.forEach.call(navigations, function(navigation) {
				// Array.prototype.forEach.call(navigation.querySelectorAll(settings.item), function(naviItem, index) {
				// 	naviItem.addEventListener('mouseenter', function() {
				// 		naviItem.classList.add(settings.activeClass);
				// 		console.log('name');
				// 	});

				// 	naviItem.addEventListener('mouseleave', function() {
				// 		naviItem.classList.remove(settings.activeClass);
				// 	});

				// });




				// Array.prototype.forEach.call(navigation.querySelectorAll('.navi-name:not(:only-child)'), function(naviName) {
				// Array.prototype.forEach.call(navigation.querySelectorAll(settings.name), function(naviName) {
				// 	naviName.addEventListener('focusin', function() {
				// 		naviName.parentElement.classList.add(settings.activeClass);						
				// 		Array.prototype.forEach.call(getSiblings(naviName.parentElement), function(siblingsItem) {
				// 			siblingsItem.classList.remove(settings.activeClass);
				// 		});
				// 	});
	
					// naviName.addEventListener('focusout', function() {
						// console.log(naviName.closest('.active'));
						// naviName.parentElement.classList.remove(settings.activeClass);
					// });
				// });
			});


		};
		/**
		 * Initialize the instance
		 */
		var init = function () {
			// Setup the DOM
			publicAPIs.setup();
		};

		// Initialize and return the Public APIs
		init();
		return publicAPIs;
	};

	// Return the Constructor
	return Constructor;
});





























































/**
 * buiFile
 */
(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], function () {
			return factory(root);
		});
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.buiFile = factory(root);
	}
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

	'use strict';

	// Variables
	var defaults = {
		// general
		fileItemClass: 'file-item',

		fileFormClass: 'file-form',

		fileName: true,
		fileNameClass: 'file-name',

		fileType: true,
		fileTypeClass: 'file-type',

		fileDelete: true,
		fileDeleteClass: 'file-delete',

		maxlength: 1,

		ellipsis: false,
		ellipsisLimit: 2,
		ellipsisField: '',
		ellipsisActiveClass: 'limit',

		// target
		target: null,
		targetClass: 'bui-fold-target',
		targetActiveClass: 'active',

		// close
		button: 'button',
		buttonClass: 'fold',
		buttonActiveClass: 'active',
		buttonText: '열기',
		buttonActiveText: null,
		buttonAppendTo: null,

		// accordion
		accordion: false,

		/* callback */
		onloadCallBack: function() {return false;},
		eventCallBack: function() {return false;},
		activeCallBack: function() {return false;},
		inactiveCallBack: function() {return false;}
	};

	/**
	 * Merge two or more objects together.
	 * @param	{Object}	objects		The objects to merge together
	 * @returns	{Object}				Merged values of defaults and options
	 */
	var extend = function () {
		var merged = {};
		Array.prototype.forEach.call(arguments, function (obj) {
			for (var key in obj) {
				if (!obj.hasOwnProperty(key)) return;
				merged[key] = obj[key];
			}
		});
		return merged;
	};

	/**
	 * Active a tab and its content
	 * @param	{Object}	settings		User settings and options
	 * @param	{Node}		toggleTarget	The tab content
	 */
	var changeFile = function(settings, fileItem, fileName, fileType, fileForm) {
		if(fileForm.files.length === 0) {
			console.log('파일 삭제');
			fileItem.classList.remove('typed');
			fileName.removeAttribute('data-bui-file-name');
			fileType.removeAttribute('data-bui-file-type');
			fileType.removeAttribute('style');
		} else {
			console.log('파일 첨부');
			fileItem.classList.add('typed');
			fileType.setAttribute('data-bui-file-type', fileForm.files[0].type.split('/')[0]);
			fileName.setAttribute('data-bui-file-name', fileForm.files[0].name);

			if(fileForm.files[0].type.split('/')[0] === 'image') {
				fileType.setAttribute('style', 'background-image: url(' + URL.createObjectURL(fileForm.files[0]) + ')');
			} else {
				fileType.removeAttribute('style');
			}
		}
	};

	/**
	 * Create the Constructor object
	 */
	var Constructor = function (selector, options) {

		// Merge user options with defaults
		settings = extend(defaults, options || {});

		// Variables
		var publicAPIs = {};
		var settings;

		publicAPIs.append = function(fileList) {
			var fileItem, fileName, fileType, fileForm, fileDelete;
			fileItem = document.createElement('div');
			fileItem.classList.add(settings.fileItemClass);

			fileForm = document.createElement('input');
			fileForm.type = 'file';
			fileForm.classList.add(settings.fileFormClass);

			fileName = document.createElement('span');
			fileName.classList.add(settings.fileNameClass);

			fileType = document.createElement('span');
			fileType.classList.add(settings.fileTypeClass);

			fileDelete = document.createElement('button');
			fileDelete.type = 'button';
			fileDelete.innerHTML = '삭제';
			fileDelete.className = settings.fileDeleteClass;

			fileItem.append(fileForm);
			settings.fileName = true ? fileItem.append(fileName) : null;
			settings.fileType = true ? fileItem.append(fileType) : null;
			settings.fileDelete = true ? fileItem.append(fileDelete) : null;

			fileList.append(fileItem);
			
			
			fileForm.addEventListener('change', function() {
				
				console.log('dd');
				changeFile(settings, fileItem, fileName, fileType, fileForm);

				var clone = fileItem.cloneNode(true);
				fileItem.after(clone);
				
				// var siblings = getSiblings(fileItem);
				// if(siblings.length < settings.maxlength) {
				// }



			});
			


			// fileDelete.addEventListener('click', function() {
			// 	var siblings = getSiblings(fileItem);
			// 	console.log(siblings.length);
			// 	fileForm.value = '';
			// 	changeFile(settings, fileItem, fileName, fileType, fileForm, fileDelete);
			// 	fileItems = fileList.querySelectorAll('.' + settings.fileItemClass);
			// 	if (!fileItems) return;
			// 	if(fileItems.length > 1) {
			// 		fileItem.remove();
			// 	}
			// });
		},

		publicAPIs.template = function(fileList) {
			var fileItems = fileList.querySelectorAll('.' + settings.fileItemClass);
			if (!fileItems) return;
			
			Array.prototype.forEach.call(fileItems, function(fileItem, index) {
				var fileForm = fileItem.querySelector('.' + settings.fileFormClass);
				var fileName = fileItem.querySelector('.' + settings.fileNameClass);
				var fileType = fileItem.querySelector('.' + settings.fileTypeClass);
				var fileDelete = fileItem.querySelector('.' + settings.fileDeleteClass);
			});
		}
		

		/**
		 * Setup the DOM with the proper attributes
		 */
		publicAPIs.setup = function() {
			// Variables
			var selectItems = document.querySelectorAll(selector);
			if (!selectItems) return;

			Array.prototype.forEach.call(selectItems, function(fileList) {
				publicAPIs.append(fileList);
			});
		};

		/**
		 * Initialize the instance
		 */
		var init = function () {
			// Setup the DOM
			publicAPIs.setup();
		};

		// Initialize and return the Public APIs
		init();
		return publicAPIs;
	};

	// Return the Constructor
	return Constructor;
});






