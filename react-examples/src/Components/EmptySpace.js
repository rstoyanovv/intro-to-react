export function EmptySpace({ height }) {
    const style = {
      height: height || '20px'
    };
  
    return (
    <div style={style}></div>
    );
}