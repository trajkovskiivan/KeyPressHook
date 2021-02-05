import {useEffect, useRef} from 'react';

export default function onKeyPress(key, cb) {
  const callBackRef = useRef(cb);
  useEffect(() => {
    callBackRef.current = cb
  });
  useEffect(() => {
    function handle(event) {
      if (event.code === key) {
        callBackRef.current(event)
      }
    }
    window.addEventListener("keypress", handle)
    return () => window.removeEventListener('keypress', handle)
  }, [key]);
}
