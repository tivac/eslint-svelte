function j(){}const dt=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function ht(t){return t&&typeof t=="object"&&typeof t.then=="function"}function Z(t){return t()}function U(){return Object.create(null)}function M(t){t.forEach(Z)}function tt(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let D;function Gt(t,e){return D||(D=document.createElement("a")),D.href=e,t===D.href}function mt(t){return Object.keys(t).length===0}function pt(t,...e){if(t==null)return j;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t,e,n){t.$$.on_destroy.push(pt(e,n))}function Kt(t,e,n,i){if(t){const r=et(t,e,n,i);return t[0](r)}}function et(t,e,n,i){return t[1]&&i?_t(n.ctx.slice(),t[1](i(e))):n.ctx}function Qt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)l[u]=e.dirty[u]|r[u];return l}return e.dirty|r}return e.dirty}function Ut(t,e,n,i,r,l){if(r){const s=et(e,n,i,l);t.p(s,r)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Xt(t,e,n){return t.set(n),e}const nt=typeof window!="undefined";let yt=nt?()=>window.performance.now():()=>Date.now(),G=nt?t=>requestAnimationFrame(t):j;const E=new Set;function it(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&G(it)}function gt(t){let e;return E.size===0&&G(it),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let B=!1;function bt(){B=!0}function wt(){B=!1}function xt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function $t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const d=e[o];d.claim_order!==void 0&&c.push(d)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,d=(r>0&&e[n[r]].claim_order<=o?r+1:xt(1,r,f=>e[n[f]].claim_order,o))-1;i[c]=n[d]+1;const a=d+1;n[a]=c,r=Math.max(a,r)}const l=[],s=[];let u=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);u>=c;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);l.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<l.length&&s[c].claim_order>=l[o].claim_order;)o++;const d=o<l.length?l[o]:null;t.insertBefore(s[c],d)}}function kt(t,e){t.appendChild(e)}function rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=st("style");return Et(rt(t),e),e.sheet}function Et(t,e){kt(t.head||t,e)}function St(t,e){if(B){for($t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Yt(t,e,n){B&&!n?St(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function At(t){t.parentNode.removeChild(t)}function Zt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function st(t){return document.createElement(t)}function Ct(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ct(t){return document.createTextNode(t)}function te(){return ct("")}function ee(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ne(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Nt(t){return Array.from(t.childNodes)}function jt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function lt(t,e,n,i,r=!1){jt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ot(t,e,n,i){return lt(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||l.push(u.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function ie(t,e,n){return ot(t,e,n,st)}function re(t,e,n){return ot(t,e,n,Ct)}function se(t,e){return lt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>ct(e),!0)}function ce(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function le(t,e){t.value=e==null?"":e}function oe(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ue(t,e,n){t.classList[n?"add":"remove"](e)}function ut(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ae(t,e=document.body){return Array.from(e.querySelectorAll(t))}const O=new Map;let L=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function qt(t,e){const n={stylesheet:vt(e),rules:{}};return O.set(t,n),n}function Dt(t,e,n,i,r,l,s,u=0){const c=16.666/i;let o=`{
`;for(let p=0;p<=1;p+=c){const x=e+(n-e)*l(p);o+=p*100+`%{${s(x,1-x)}}
`}const d=o+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Mt(d)}_${u}`,f=rt(t),{stylesheet:m,rules:_}=O.get(f)||qt(f,t);_[a]||(_[a]=!0,m.insertRule(`@keyframes ${a} ${d}`,m.cssRules.length));const b=t.style.animation||"";return t.style.animation=`${b?`${b}, `:""}${a} ${i}ms linear ${r}ms 1 both`,L+=1,a}function V(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),L-=r,L||Pt())}function Pt(){G(()=>{L||(O.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),O.clear())})}let N;function w(t){N=t}function v(){if(!N)throw new Error("Function called outside component initialization");return N}function fe(t){v().$$.on_mount.push(t)}function de(t){v().$$.after_update.push(t)}function _e(t){v().$$.on_destroy.push(t)}function he(){const t=v();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=ut(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function me(t,e){return v().$$.context.set(t,e),e}function pe(t){return v().$$.context.get(t)}const C=[],X=[],R=[],I=[],at=Promise.resolve();let W=!1;function ft(){W||(W=!0,at.then(J))}function ye(){return ft(),at}function z(t){R.push(t)}function ge(t){I.push(t)}const H=new Set;let P=0;function J(){const t=N;do{for(;P<C.length;){const e=C[P];P++,w(e),Rt(e.$$)}for(w(null),C.length=0,P=0;X.length;)X.pop()();for(let e=0;e<R.length;e+=1){const n=R[e];H.has(n)||(H.add(n),n())}R.length=0}while(C.length);for(;I.length;)I.pop()();W=!1,H.clear(),w(t)}function Rt(t){if(t.fragment!==null){t.update(),M(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}let A;function Tt(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function Y(t,e,n){t.dispatchEvent(ut(`${e?"intro":"outro"}${n}`))}const T=new Set;let k;function Ot(){k={r:0,c:[],p:k}}function Lt(){k.r||M(k.c),k=k.p}function K(t,e){t&&t.i&&(T.delete(t),t.i(e))}function zt(t,e,n,i){if(t&&t.o){if(T.has(t))return;T.add(t),k.c.push(()=>{T.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const Bt={duration:0};function be(t,e,n){let i=e(t,n),r=!1,l,s,u=0;function c(){l&&V(t,l)}function o(){const{delay:a=0,duration:f=300,easing:m=dt,tick:_=j,css:b}=i||Bt;b&&(l=Dt(t,0,1,f,a,m,b,u++)),_(0,1);const p=yt()+a,x=p+f;s&&s.abort(),r=!0,z(()=>Y(t,!0,"start")),s=gt($=>{if(r){if($>=x)return _(1,0),Y(t,!0,"end"),c(),r=!1;if($>=p){const S=m(($-p)/f);_(S,1-S)}}return r})}let d=!1;return{start(){d||(d=!0,V(t),tt(i)?(i=i(),Tt().then(o)):o())},invalidate(){d=!1},end(){r&&(c(),r=!1)}}}function we(t,e){const n=e.token={};function i(r,l,s,u){if(e.token!==n)return;e.resolved=u;let c=e.ctx;s!==void 0&&(c=c.slice(),c[s]=u);const o=r&&(e.current=r)(c);let d=!1;e.block&&(e.blocks?e.blocks.forEach((a,f)=>{f!==l&&a&&(Ot(),zt(a,1,1,()=>{e.blocks[f]===a&&(e.blocks[f]=null)}),Lt())}):e.block.d(1),o.c(),K(o,1),o.m(e.mount(),e.anchor),d=!0),e.block=o,e.blocks&&(e.blocks[l]=o),d&&J()}if(ht(t)){const r=v();if(t.then(l=>{w(r),i(e.then,1,e.value,l),w(null)},l=>{if(w(r),i(e.catch,2,e.error,l),w(null),!e.hasCatch)throw l}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function xe(t,e,n){const i=e.slice(),{resolved:r}=t;t.current===t.then&&(i[t.value]=r),t.current===t.catch&&(i[t.error]=r),t.block.p(i,n)}const $e=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function ke(t,e){t.d(1),e.delete(t.key)}function ve(t,e,n,i,r,l,s,u,c,o,d,a){let f=t.length,m=l.length,_=f;const b={};for(;_--;)b[t[_].key]=_;const p=[],x=new Map,$=new Map;for(_=m;_--;){const h=a(r,l,_),y=n(h);let g=s.get(y);g?i&&g.p(h,e):(g=o(y,h),g.c()),x.set(y,p[_]=g),y in b&&$.set(y,Math.abs(_-b[y]))}const S=new Set,Q=new Set;function F(h){K(h,1),h.m(u,d),s.set(h.key,h),d=h.first,m--}for(;f&&m;){const h=p[m-1],y=t[f-1],g=h.key,q=y.key;h===y?(d=h.first,f--,m--):x.has(q)?!s.has(g)||S.has(g)?F(h):Q.has(q)?f--:$.get(g)>$.get(q)?(Q.add(g),F(h)):(S.add(q),f--):(c(y,s),f--)}for(;f--;){const h=t[f];x.has(h.key)||c(h,s)}for(;m;)F(p[m-1]);return p}function Ee(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],u=e[l];if(u){for(const c in s)c in u||(i[c]=1);for(const c in u)r[c]||(n[c]=u[c],r[c]=1);t[l]=u}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Se(t){return typeof t=="object"&&t!==null?t:{}}function Ae(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ce(t){t&&t.c()}function Ne(t,e){t&&t.l(e)}function Ft(t,e,n,i){const{fragment:r,on_mount:l,on_destroy:s,after_update:u}=t.$$;r&&r.m(e,n),i||z(()=>{const c=l.map(Z).filter(tt);s?s.push(...c):M(c),t.$$.on_mount=[]}),u.forEach(z)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(M(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){t.$$.dirty[0]===-1&&(C.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function je(t,e,n,i,r,l,s,u=[-1]){const c=N;w(t);const o=t.$$={fragment:null,ctx:null,props:l,update:j,not_equal:r,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:U(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};s&&s(o.root);let d=!1;if(o.ctx=n?n(t,e.props||{},(a,f,...m)=>{const _=m.length?m[0]:f;return o.ctx&&r(o.ctx[a],o.ctx[a]=_)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](_),d&&It(t,a)),f}):[],o.update(),d=!0,M(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){bt();const a=Nt(e.target);o.fragment&&o.fragment.l(a),a.forEach(At)}else o.fragment&&o.fragment.c();e.intro&&K(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),wt(),J()}w(c)}class Me{$destroy(){Ht(this,1),this.$destroy=j}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ge as $,Ht as A,_t as B,ye as C,j as D,pe as E,Ct as F,re as G,Gt as H,ue as I,ee as J,Jt as K,he as L,Zt as M,Kt as N,tt as O,Ut as P,Vt as Q,Qt as R,Me as S,M as T,Xt as U,ae as V,ve as W,ke as X,le as Y,X as Z,Ae as _,Nt as a,$e as a0,we as a1,xe as a2,_e as a3,z as a4,be as a5,se as b,ie as c,At as d,st as e,ne as f,oe as g,Yt as h,je as i,St as j,ce as k,te as l,Ot as m,zt as n,Lt as o,K as p,me as q,de as r,Wt as s,ct as t,fe as u,Ce as v,Ne as w,Ft as x,Ee as y,Se as z};
