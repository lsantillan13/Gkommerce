export default function Payment(){

  const PaymentWidget = [
    {
      id: '0',
      img: '🚚',
      title: 'ENVIAMOS TU COMPRA',
      description: 'Entregas a todo el país'
    },
    {
      id: '1',
      img: '💳',
      title: 'PAGÁ COMO QUIERAS',
      description: 'Tarjetas de crédito o efectivo'
    },
    {
      id: '2',
      img: '🔒',
      title: 'COMPRÁ CON SEGURIDAD',
      description: 'Tus datos siempre protegidos'
    }
  ]

  return(
    <section className="flex justify-center">
        <div className="flex">
          {PaymentWidget.map((e) => {
            return(
              <span key={e.id}>
                <h6 className="">{e.title}</h6>
                <p className="text-xl ">{e.img}</p>
                <p>{e.description}</p>
              </span>
            )
          })}
        </div>
    </section>
  )
};