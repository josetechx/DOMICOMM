const ReviewCard = ({
  reviewerName,
  rating,
  comment,
}) => {
  return (
    <figure className="px-2 py-4 border rounded-lg shadow-sm bg-white w-[200px] h-[200px]">
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-gray-800">
            {/* Visual rating representation */}
            <span aria-label={`Rating: ${rating}`} className="text-yellow-500">
              {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
            </span>
          </figcaption>
          <p className="text-xs font-medium text-black font-satoshi pt-3">{reviewerName}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-xs text-gray-600 font-satoshi">{comment}</blockquote>
    </figure>
  );
};

export default ReviewCard;
