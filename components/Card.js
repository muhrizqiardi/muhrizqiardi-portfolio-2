import { usePalette } from 'react-palette'
import MultiClamp from 'react-multi-clamp';
import Color from 'color';

function Card({ title, body, image, tags }) {
  const { data, loading, error } = usePalette(image)
  const mainColor = Color(data.muted).saturate(10).lighten(0.9).alpha(0.9).rgb();
  console.log(mainColor)
  return (
    <div
      className="card rounded-md hover:underline shadow-md h-60 overflow-hidden cursor-pointer transition-transform duration-200"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div
        className="p-5 h-full w-full"
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
                <div className="bg-dark text-white text-xs rounded-md py-1 px-2 mr-2 mb-2">
                  <i class={`bx bxl-${tag.toLowerCase()} relative`}
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
          <p>
            <MultiClamp ellipsis="..." clamp={3}>
              {body}
            </MultiClamp>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
