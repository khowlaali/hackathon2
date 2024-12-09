export default function FourColumnList() {
    const data = [
      {
        title: "Icons",
        items: ["Air Force 1", "Huarache", "Air Max 90"],
      },
      {
        title: "Shoes",
        items: [
          "All Shoes",
          "Custom Shoes",
          "Jordan Shoes",
          "Air Max 95",
          "Running Shoes",
        ],
      },
      {
        title: "Clothing",
        items: ["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"],
      },
      {
        title: "Kids'",
        items: [
          "Infant & Toddler Shoes",
          "Kids' Shoes",
          "Kids' Jordan Shoes",
          "Kids' Basketball Shoes",
        ],
      },
    ];
  
    return (
      <div className="flex justify-center items-center  mt-9 ">
        <div className="grid grid-cols-4 gap-8">
          {data.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 text-left">
                {column.title}
              </h3>
              <ul className="space-y-2 text-center">
                {column.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700 text-sm text-left">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
  