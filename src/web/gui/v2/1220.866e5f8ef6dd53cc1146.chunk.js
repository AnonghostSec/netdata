!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ddc5a317-b49d-4b0f-b19a-3506c5dc9439",e._sentryDebugIdIdentifier="sentry-dbid-ddc5a317-b49d-4b0f-b19a-3506c5dc9439")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"08864407160b3973b9b88c5ae92687282b21e2f4"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[1220],{51220:(e,t,s)=>{s.d(t,{Te:()=>h});var i=s(96540),n=s(40961),o=s(57530);const l="undefined"!==typeof document?i.useLayoutEffect:i.useEffect;function r(e){const t=i.useReducer((()=>({})),{})[1],s={...e,onChange:(s,i)=>{var o;i?(0,n.flushSync)(t):t(),null==(o=e.onChange)||o.call(e,s,i)}},[r]=i.useState((()=>new o.YV(s)));return r.setOptions(s),i.useEffect((()=>r._didMount()),[]),l((()=>r._willUpdate())),r}function h(e){return r({observeElementRect:o.T6,observeElementOffset:o.AO,scrollToFn:o.Ox,...e})}},57530:(e,t,s)=>{function i(e,t,s){let i,n=s.initialDeps??[];return()=>{var o,l,r,h;let a;s.key&&(null==(o=s.debug)?void 0:o.call(s))&&(a=Date.now());const c=e();if(!(c.length!==n.length||c.some(((e,t)=>n[t]!==e))))return i;let d;if(n=c,s.key&&(null==(l=s.debug)?void 0:l.call(s))&&(d=Date.now()),i=t(...c),s.key&&(null==(r=s.debug)?void 0:r.call(s))){const e=Math.round(100*(Date.now()-a))/100,t=Math.round(100*(Date.now()-d))/100,i=t/16,n=(e,t)=>{for(e=String(e);e.length<t;)e=" "+e;return e};console.info(`%c\u23f1 ${n(t,5)} /${n(e,5)} ms`,`\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0,Math.min(120-120*i,120))}deg 100% 31%);`,null==s?void 0:s.key)}return null==(h=null==s?void 0:s.onChange)||h.call(s,i),i}}function n(e,t){if(void 0===e)throw new Error("Unexpected undefined"+(t?`: ${t}`:""));return e}s.d(t,{YV:()=>d,vp:()=>l,Ox:()=>c,AO:()=>h,T6:()=>r});const o=e=>e,l=e=>{const t=Math.max(e.startIndex-e.overscan,0),s=Math.min(e.endIndex+e.overscan,e.count-1),i=[];for(let n=t;n<=s;n++)i.push(n);return i},r=(e,t)=>{const s=e.scrollElement;if(!s)return;const i=e=>{const{width:s,height:i}=e;t({width:Math.round(s),height:Math.round(i)})};if(i(s.getBoundingClientRect()),"undefined"===typeof ResizeObserver)return()=>{};const n=new ResizeObserver((e=>{const t=e[0];if(null==t?void 0:t.borderBoxSize){const e=t.borderBoxSize[0];if(e)return void i({width:e.inlineSize,height:e.blockSize})}i(s.getBoundingClientRect())}));return n.observe(s,{box:"border-box"}),()=>{n.unobserve(s)}},h=(e,t)=>{const s=e.scrollElement;if(!s)return;const i=()=>{t(s[e.options.horizontal?"scrollLeft":"scrollTop"])};return i(),s.addEventListener("scroll",i,{passive:!0}),()=>{s.removeEventListener("scroll",i)}},a=(e,t,s)=>{if(null==t?void 0:t.borderBoxSize){const e=t.borderBoxSize[0];if(e){return Math.round(e[s.options.horizontal?"inlineSize":"blockSize"])}}return Math.round(e.getBoundingClientRect()[s.options.horizontal?"width":"height"])},c=(e,{adjustments:t=0,behavior:s},i)=>{var n,o;const l=e+t;null==(o=null==(n=i.scrollElement)?void 0:n.scrollTo)||o.call(n,{[i.options.horizontal?"left":"top"]:l,behavior:s})};class d{constructor(e){this.unsubs=[],this.scrollElement=null,this.isScrolling=!1,this.isScrollingTimeoutId=null,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollDirection=null,this.scrollAdjustments=0,this.measureElementCache=new Map,this.observer=(()=>{let e=null;const t=()=>e||("undefined"!==typeof ResizeObserver?e=new ResizeObserver((e=>{e.forEach((e=>{this._measureElement(e.target,e)}))})):null);return{disconnect:()=>{var e;return null==(e=t())?void 0:e.disconnect()},observe:e=>{var s;return null==(s=t())?void 0:s.observe(e,{box:"border-box"})},unobserve:e=>{var s;return null==(s=t())?void 0:s.unobserve(e)}}})(),this.range=null,this.setOptions=e=>{Object.entries(e).forEach((([t,s])=>{"undefined"===typeof s&&delete e[t]})),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:o,rangeExtractor:l,onChange:()=>{},measureElement:a,initialRect:{width:0,height:0},scrollMargin:0,scrollingDelay:150,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,...e}},this.notify=e=>{var t,s;null==(s=(t=this.options).onChange)||s.call(t,this,e)},this.maybeNotify=i((()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null])),(e=>{this.notify(e)}),{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach((e=>e())),this.unsubs=[],this.scrollElement=null},this._didMount=()=>(this.measureElementCache.forEach(this.observer.observe),()=>{this.observer.disconnect(),this.cleanup()}),this._willUpdate=()=>{const e=this.options.getScrollElement();this.scrollElement!==e&&(this.cleanup(),this.scrollElement=e,this._scrollToOffset(this.scrollOffset,{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,(e=>{this.scrollRect=e,this.maybeNotify()}))),this.unsubs.push(this.options.observeElementOffset(this,(e=>{this.scrollAdjustments=0,this.scrollOffset!==e&&(null!==this.isScrollingTimeoutId&&(clearTimeout(this.isScrollingTimeoutId),this.isScrollingTimeoutId=null),this.isScrolling=!0,this.scrollDirection=this.scrollOffset<e?"forward":"backward",this.scrollOffset=e,this.maybeNotify(),this.isScrollingTimeoutId=setTimeout((()=>{this.isScrollingTimeoutId=null,this.isScrolling=!1,this.scrollDirection=null,this.maybeNotify()}),this.options.scrollingDelay))}))))},this.getSize=()=>this.scrollRect[this.options.horizontal?"width":"height"],this.memoOptions=i((()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey]),((e,t,s,i)=>(this.pendingMeasuredCacheIndexes=[],{count:e,paddingStart:t,scrollMargin:s,getItemKey:i})),{key:!1}),this.getFurthestMeasurement=(e,t)=>{const s=new Map,i=new Map;for(let n=t-1;n>=0;n--){const t=e[n];if(s.has(t.lane))continue;const o=i.get(t.lane);if(null==o||t.end>o.end?i.set(t.lane,t):t.end<o.end&&s.set(t.lane,!0),s.size===this.options.lanes)break}return i.size===this.options.lanes?Array.from(i.values()).sort(((e,t)=>e.end===t.end?e.index-t.index:e.end-t.end))[0]:void 0},this.getMeasurements=i((()=>[this.memoOptions(),this.itemSizeCache]),(({count:e,paddingStart:t,scrollMargin:s,getItemKey:i},n)=>{const o=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const l=this.measurementsCache.slice(0,o);for(let r=o;r<e;r++){const e=i(r),o=1===this.options.lanes?l[r-1]:this.getFurthestMeasurement(l,r),h=o?o.end:t+s,a=n.get(e),c="number"===typeof a?a:this.options.estimateSize(r),d=h+c,u=o?o.lane:r%this.options.lanes;l[r]={index:r,start:h,size:c,end:d,key:e,lane:u}}return this.measurementsCache=l,l}),{key:!1,debug:()=>this.options.debug}),this.calculateRange=i((()=>[this.getMeasurements(),this.getSize(),this.scrollOffset]),((e,t,s)=>this.range=e.length>0&&t>0?function({measurements:e,outerSize:t,scrollOffset:s}){const i=e.length-1,n=t=>e[t].start,o=u(0,i,n,s);let l=o;for(;l<i&&e[l].end<s+t;)l++;return{startIndex:o,endIndex:l}}({measurements:e,outerSize:t,scrollOffset:s}):null),{key:!1,debug:()=>this.options.debug}),this.getIndexes=i((()=>[this.options.rangeExtractor,this.calculateRange(),this.options.overscan,this.options.count]),((e,t,s,i)=>null===t?[]:e({...t,overscan:s,count:i})),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{const t=this.options.indexAttribute,s=e.getAttribute(t);return s?parseInt(s,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this._measureElement=(e,t)=>{const s=this.measurementsCache[this.indexFromElement(e)];if(!s||!e.isConnected)return void this.measureElementCache.forEach(((t,s)=>{t===e&&(this.observer.unobserve(e),this.measureElementCache.delete(s))}));const i=this.measureElementCache.get(s.key);i!==e&&(i&&this.observer.unobserve(i),this.observer.observe(e),this.measureElementCache.set(s.key,e));const n=this.options.measureElement(e,t,this);this.resizeItem(s,n)},this.resizeItem=(e,t)=>{const s=t-(this.itemSizeCache.get(e.key)??e.size);0!==s&&(e.start<this.scrollOffset+this.scrollAdjustments&&this._scrollToOffset(this.scrollOffset,{adjustments:this.scrollAdjustments+=s,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(e.index),this.itemSizeCache=new Map(this.itemSizeCache.set(e.key,t)),this.notify(!1))},this.measureElement=e=>{e&&this._measureElement(e,void 0)},this.getVirtualItems=i((()=>[this.getIndexes(),this.getMeasurements()]),((e,t)=>{const s=[];for(let i=0,n=e.length;i<n;i++){const n=t[e[i]];s.push(n)}return s}),{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{const t=this.getMeasurements();return n(t[u(0,t.length-1,(e=>n(t[e]).start),e)])},this.getOffsetForAlignment=(e,t)=>{const s=this.getSize();"auto"===t&&(t=e<=this.scrollOffset?"start":e>=this.scrollOffset+s?"end":"start"),"start"===t||("end"===t?e-=s:"center"===t&&(e-=s/2));const i=this.options.horizontal?"scrollWidth":"scrollHeight",n=(this.scrollElement?"document"in this.scrollElement?this.scrollElement.document.documentElement[i]:this.scrollElement[i]:0)-this.getSize();return Math.max(Math.min(n,e),0)},this.getOffsetForIndex=(e,t="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));const s=n(this.getMeasurements()[e]);if("auto"===t)if(s.end>=this.scrollOffset+this.getSize()-this.options.scrollPaddingEnd)t="end";else{if(!(s.start<=this.scrollOffset+this.options.scrollPaddingStart))return[this.scrollOffset,t];t="start"}const i="end"===t?s.end+this.options.scrollPaddingEnd:s.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(i,t),t]},this.isDynamicMode=()=>this.measureElementCache.size>0,this.cancelScrollToIndex=()=>{null!==this.scrollToIndexTimeoutId&&(clearTimeout(this.scrollToIndexTimeoutId),this.scrollToIndexTimeoutId=null)},this.scrollToOffset=(e,{align:t="start",behavior:s}={})=>{this.cancelScrollToIndex(),"smooth"===s&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(e,t),{adjustments:void 0,behavior:s})},this.scrollToIndex=(e,{align:t="auto",behavior:s}={})=>{e=Math.max(0,Math.min(e,this.options.count-1)),this.cancelScrollToIndex(),"smooth"===s&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");const[i,n]=this.getOffsetForIndex(e,t);this._scrollToOffset(i,{adjustments:void 0,behavior:s}),"smooth"!==s&&this.isDynamicMode()&&(this.scrollToIndexTimeoutId=setTimeout((()=>{this.scrollToIndexTimeoutId=null;if(this.measureElementCache.has(this.options.getItemKey(e))){const[o]=this.getOffsetForIndex(e,n);t=o,i=this.scrollOffset,Math.abs(t-i)<1||this.scrollToIndex(e,{align:n,behavior:s})}else this.scrollToIndex(e,{align:n,behavior:s});var t,i})))},this.scrollBy=(e,{behavior:t}={})=>{this.cancelScrollToIndex(),"smooth"===t&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.scrollOffset+e,{adjustments:void 0,behavior:t})},this.getTotalSize=()=>{var e;const t=this.getMeasurements();let s;return s=0===t.length?this.options.paddingStart:1===this.options.lanes?(null==(e=t[t.length-1])?void 0:e.end)??0:Math.max(...t.slice(-this.options.lanes).map((e=>e.end))),s-this.options.scrollMargin+this.options.paddingEnd},this._scrollToOffset=(e,{adjustments:t,behavior:s})=>{this.options.scrollToFn(e,{behavior:s,adjustments:t},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(e),this.scrollRect=this.options.initialRect,this.scrollOffset=this.options.initialOffset,this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach((e=>{this.itemSizeCache.set(e.key,e.size)})),this.maybeNotify()}}const u=(e,t,s,i)=>{for(;e<=t;){const n=(e+t)/2|0,o=s(n);if(o<i)e=n+1;else{if(!(o>i))return n;t=n-1}}return e>0?e-1:0}}}]);