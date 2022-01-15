import { usePalette } from 'react-palette'
import Color from 'color';

function Card({ title, body, image, tags, href }) {
  const { data, loading, error } = usePalette(image)
  const mainColor = Color(data.muted).saturate(10).lighten(0.9).alpha(1).rgb();
  return (

    <div
      className="card rounded-md shadow-md overflow-hidden cursor-pointer transition-transform duration-200"
    >
      <a className="hover:underline" href={href}>
        <div
          className=" h-56"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div
          className="p-5 h-full w-full transition-opacity duration-200"
          style={{
            background: `${mainColor}`,
          }}
        >
          <div className="card-desc ">
            <h3 className="text-xl mb-4 font-bold">
              {title}
            </h3>
            <div className="flex flex-row flex-wrap mb-2">
              {
                tags.map((tag) =>
                  <div className="bg-dark text-white text-xs rounded-md py-1 px-2 mr-2 mb-2 no-underline">
                    <i className={`bx bxl-${tag.toLowerCase()} relative`}
                      style={{
                        top: 1
                      }}
                    />
                    {" "}
                    {tag}
                  </div>
                )
              }
            </div>
            <p className="">
              {body}
            </p>
          </div>
        </div>
      </a>
    </div>

  );
}
export default Card;
