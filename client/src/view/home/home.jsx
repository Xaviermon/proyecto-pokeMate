import Nav from "../../componentes/nav/nav"
import geometria from '../../imagenes/geometria1.jpg'
import algebra from '../../imagenes/albegra.jpg'
import aritmetica from '../../imagenes/aritmetica.jpg'
import trigo from '../../imagenes/trigo.png'
import razmat from '../../imagenes/razmat.jpg'

const products = [
  {
    id: 1,
    name: 'GEOMETRIA',
    href: '#',
    imageSrc: geometria,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
		id: 2,
    name: 'ALGEBRA',
    href: '#',
    imageSrc: algebra,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
	},
	{
		id: 3,
    name: 'ARITMÉTICA',
    href: '#',
    imageSrc: aritmetica,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
	},
	{
		id: 4,
    name: 'TRIGONOMETRIA',
    href: '#',
    imageSrc: trigo,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
	},
	{
		id: 5,
    name: 'RAZOMAMIENTO MATEMATICO',
    href: '#',
    imageSrc: razmat,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
	},
]
const Home = () => {
	return (
		<div>
			<Nav></Nav>
			<div >
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Cursos</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex flex-1 flex-col">
                <div>
                  <h2 className="text-xl text-center text-red-600">
                      {product.name}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
		</div>
	)
}

export default Home