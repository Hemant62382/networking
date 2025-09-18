import React from 'react'
 import { useRef } from 'react'

const FormPage = () => {
     const iframeRef = useRef(null);

    const handleLoad = () =>{
        const iframe = iframeRef.current;
        try{
            const href = iframe ?.contentWindow?.location.href;
            if(href && href.includes('formResponse')){
                alert("🎉 Form submitted successfully!")
            }
        }
        catch{

        }
    }

  return (
    <div className='h-full w-full overflow-hidden'>
      
    <div className=" flex justify-center p-4">
          <iframe
        ref={iframeRef}
        src="https://docs.google.com/forms/d/e/1FAIpQLSdMCJ-szHJD45ExgbKh29bpwBhEsOE0epZghQot5Z2B0tfpUQ/viewform?embedded=true"
        width="640"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        onLoad={handleLoad}
        title="Google Form"
      >
        Loading…
      </iframe>
    
    </div>
    </div>
  )
}

export default FormPage
