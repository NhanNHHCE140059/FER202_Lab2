import 'components/OurMenu/OurMenu.css'

function OurMenu({ menus }) {
  return (
    <div className="mt-5">
      <h2 className="text-white" style={{ marginLeft: '10%' }}>
        Our Menu
      </h2>
      <div className="d-flex gap-4 justify-content-center">
        {menus.map((menu) => (
          <div
            className="card position-relative"
            style={{ width: '18rem' }}
            key={menu.id}
          >
            {menu.store && (
              <div className="corner-badge text-uppercase">{menu.store}</div>
            )}
            <img src={menu.src} className="card-img-top" alt={menu.alt} />
            <div className="card-body">
              <h5 className="card-title">{menu.title}</h5>
              <p className="card-text">
                {menu.store === 'sale' && <s>$40.00</s>}
                {menu.store === 'sale' ? (
                  <strong className="text-warning">{menu.price}</strong>
                ) : (
                  menu.price
                )}
              </p>
              <button className="btn btn-secondary w-100">Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurMenu
