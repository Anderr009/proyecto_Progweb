import Link from 'next/link'
function AuthorCard({ props }) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{props.nombre} {props.apellido}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Telefono: {props.telefono}</h6>
                <p className="card-text">Ciudad actualmente residente: {props.ciudad} {props.estado} <br /> País: {props.pais}</p>
                <Link href="/" className="card-link">Libros escritos</Link>
                <Link href="/" className="card-link">Biografía</Link>
            </div>
        </div>
    )
}

export default AuthorCard