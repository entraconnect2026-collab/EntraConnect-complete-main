(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,56023,e=>{"use strict";var t=e.i(33358),a=e.i(53985);e.s(["default",0,function(){let[e,r]=(0,a.useState)(!1),[o,i]=(0,a.useState)("Management"),[n,s]=(0,a.useState)("");return((0,a.useEffect)(()=>{let e=e=>{e.detail&&(i(e.detail.departmentName),s(e.detail.targetUrl),r(!0))};return window.addEventListener("open-department-login",e),()=>window.removeEventListener("open-department-login",e)},[]),e)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        /* Ultra-Premium Glassmorphism Login Modal */
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
        
        #premium-login-modal {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 99999999999999999;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: fadeIn 0.5s ease forwards;
          font-family: 'Outfit', sans-serif;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .modal-wrapper {
          position: relative;
          padding: 3px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.0));
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          animation: slideUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        @keyframes slideUp {
          from { transform: translateY(40px) scale(0.95); }
          to { transform: translateY(0) scale(1); }
        }

        .modal-wrapper::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: 24px;
          padding: 2px;
          background: linear-gradient(45deg, #ff007f, #7928ca, #4338ca, #00dfd8);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.6;
          animation: borderGlow 4s linear infinite;
        }

        @keyframes borderGlow {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }

        .modal-content {
          background: rgba(15, 15, 20, 0.85);
          border-radius: 21px;
          padding: 48px 40px;
          width: 100%;
          min-width: 380px;
          max-width: 420px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .modal-content::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at top right, rgba(121, 40, 202, 0.15), transparent 50%),
                      radial-gradient(circle at bottom left, rgba(0, 223, 216, 0.15), transparent 50%);
          z-index: 0;
          pointer-events: none;
        }

        .modal-close {
          position: absolute;
          top: 20px; right: 24px;
          color: rgba(255,255,255,0.4);
          font-size: 28px;
          cursor: pointer;
          transition: all 0.3s ease;
          background: none; border: none;
          z-index: 10;
          line-height: 1;
        }
        .modal-close:hover {
          color: #fff;
          transform: rotate(90deg);
        }

        .modal-header {
          position: relative;
          z-index: 1;
          margin-bottom: 40px;
        }

        .modal-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        .modal-icon svg {
          width: 32px;
          height: 32px;
          fill: none;
          stroke: url(#gradient);
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .modal-title {
          color: #fff;
          font-size: 28px;
          font-weight: 600;
          margin: 0;
          letter-spacing: -0.5px;
          background: linear-gradient(to right, #fff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .modal-subtitle {
          color: rgba(255,255,255,0.5);
          font-size: 14px;
          margin-top: 8px;
          font-weight: 400;
        }

        .modal-form {
          position: relative;
          z-index: 1;
        }

        .input-group {
          position: relative;
          margin-bottom: 24px;
          text-align: left;
        }

        .input-group label {
          display: block;
          color: rgba(255,255,255,0.7);
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .modal-input {
          width: 100%;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px 20px;
          color: #fff;
          font-size: 16px;
          font-family: 'Outfit', sans-serif;
          outline: none;
          transition: all 0.3s ease;
          box-sizing: border-box;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
        }
        .modal-input:focus {
          border-color: rgba(0, 223, 216, 0.5);
          background: rgba(0, 0, 0, 0.5);
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2), 0 0 15px rgba(0, 223, 216, 0.15);
        }
        .modal-input::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }

        .modal-submit {
          width: 100%;
          background: linear-gradient(135deg, #7928ca 0%, #4338ca 100%);
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 16px;
          font-size: 16px;
          font-weight: 600;
          font-family: 'Outfit', sans-serif;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(121, 40, 202, 0.3);
          position: relative;
          overflow: hidden;
          margin-top: 10px;
        }
        
        .modal-submit::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
          transform: skewX(-20deg);
          transition: all 0.5s ease;
        }

        .modal-submit:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(121, 40, 202, 0.5);
          background: linear-gradient(135deg, #8a33e3 0%, #4f42e3 100%);
        }
        
        .modal-submit:hover::after {
          left: 150%;
        }
        
        .modal-submit:active {
          transform: translateY(0);
        }
      `}),(0,t.jsx)("svg",{style:{width:0,height:0,position:"absolute"},"aria-hidden":"true",focusable:"false",children:(0,t.jsxs)("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"#00dfd8"}),(0,t.jsx)("stop",{offset:"100%",stopColor:"#7928ca"})]})}),(0,t.jsx)("div",{id:"premium-login-modal",onClick:e=>{e.target===e.currentTarget&&r(!1)},children:(0,t.jsx)("div",{className:"modal-wrapper",children:(0,t.jsxs)("div",{className:"modal-content",children:[(0,t.jsx)("button",{className:"modal-close",onClick:()=>r(!1),children:"×"}),(0,t.jsxs)("div",{className:"modal-header",children:[(0,t.jsx)("div",{className:"modal-icon",children:(0,t.jsx)("svg",{viewBox:"0 0 24 24",children:(0,t.jsx)("path",{d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),(0,t.jsxs)("h2",{className:"modal-title",children:[o," Portal"]}),(0,t.jsx)("div",{className:"modal-subtitle",children:"Secure authentication required"})]}),(0,t.jsxs)("form",{className:"modal-form",onSubmit:e=>{e.preventDefault(),n&&(window.location.href=n)},children:[(0,t.jsxs)("div",{className:"input-group",children:[(0,t.jsx)("label",{children:"Access ID"}),(0,t.jsx)("input",{type:"text",className:"modal-input",placeholder:"Enter your username",required:!0})]}),(0,t.jsxs)("div",{className:"input-group",children:[(0,t.jsx)("label",{children:"Security Key"}),(0,t.jsx)("input",{type:"password",className:"modal-input",placeholder:"Enter your password",required:!0})]}),(0,t.jsx)("button",{type:"submit",className:"modal-submit",children:"Authenticate"})]})]})})})]}):null}])}]);