import './BackgroundWithContent.css'
import Balatro from './Balatro';

function BackgroundWithContent({ 
  children, 
  balatroProps = {}, 
  containerClass = '', 
  contentClass = '' 
}) {
  return (
    <div className={`background-container ${containerClass}`}>
      <div className="balatro-background">
        <Balatro 
          isRotate={false}
          mouseInteraction={false}
          pixelFilter={700}
          {...balatroProps} 
        />
      </div>
      
      <div className={`content-wrapper ${contentClass}`}>
        {children}
      </div>
    </div>
  );
}

export default BackgroundWithContent;