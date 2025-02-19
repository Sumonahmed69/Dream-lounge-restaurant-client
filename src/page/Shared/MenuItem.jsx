

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div>
              <div className="flex space-x-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[118px] h-[104px]" src={image} alt="" />
            <div>
                <h3 className="uppercase font-bold">{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="font-bold text-yellow-500">BDT-{price}</p>
        </div>
        </div>
    );
};

export default MenuItem; 