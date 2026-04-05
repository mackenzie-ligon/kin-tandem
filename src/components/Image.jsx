export default function Image({ src, className='', imgClassName='', id='', isSquare=false, isBordered=false }) {
    const square = isSquare ? 'square-img' : 'rect-img';
    const borderedClass = isBordered ? 'bordered' : '';
    return (
        <div class={`${square} ${borderedClass} ${className}`}>
            <img src={src} id={id} class={imgClassName} />

        </div>
    )
}