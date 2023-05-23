import { useRef, useEffect } from 'react';
import panzoom from 'panzoom';

function MyComponent() {
  const myElementRef = useRef(null);
  const panZoomControllerRef = useRef(null);

  useEffect(() => {
    const element = myElementRef.current;
    const panZoomController = panzoom(element);
    panZoomControllerRef.current = panZoomController;

    // Cleanup: destroy the panzoom controller when the component unmounts
    return () => {
      panZoomController.dispose();
    };
  }, []);

  function handleZoomIn() {
    panZoomControllerRef.current && panZoomControllerRef.current.smoothZoom(0, 0, 0.5);;
  }

  function handleZoomOut() {
    panZoomControllerRef.current && panZoomControllerRef.current.smoothZoom(0, 0, 1.5);;
  }

  return (
    <div>
      <div ref={myElementRef}>My Element</div>
      <button onClick={handleZoomIn}>Zoom In</button>
      <button onClick={handleZoomOut}>Zoom Out</button>
    </div>
  );
}



export default MyComponent;
