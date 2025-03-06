import '../styles/barraProgreso.css';

export function BarraProgreso({progreso, total} : {progreso:number, total:number}){

    let porcentajeProgreso:number = (progreso*100)/total;

    return(
        <article className="barraProgreso">
            <div className="progreso" style={{width: porcentajeProgreso+'%'}} >
                {porcentajeProgreso+' %'}
            </div>
        </article>
    )
}