const Card = ({
  name,
  skills,
  mobile,
  email,
  imageUrl,
  facebook,
  twitter,
  linkedin,
  telegram,
}) => {
  return (
    <div className="w-40 h-40 sm:w-40 sm:h-44 md:w-48 md:h-52 lg:w-48 lg:h-58 flex flex-col gap-y-1 md:gap-y-2 items-center border border-gray-400 bg-white dark:bg-slate-600 dark:text-white rounded-xl shadow-md p-3">
      <img
        className="size-12 sm:size-14 md:size-16 lg:size-20 rounded-full object-contain object-center border border-zinc-500"
        src={imageUrl}
        alt="profilePicture"
      />
      <h2 className="font-bold text-xs sm:text-sm ">{name}</h2>
      <h3 className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
        {skills}
      </h3>
      <div className="pt-2 truncate flex flex-col items-center justify-center text-xs overflow-hidden font-thin">
        <span>{mobile}</span>
        <span>{email}</span>
      </div>
    </div>
  );
};

export default Card;
