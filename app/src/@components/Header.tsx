/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import tw from 'twin.macro';

export const Header = () => {
  return (
    <div css={tw`relative py-6 px-4 sm:px-6 lg:px-8 bg-white`}>
      <nav
        css={tw`relative flex items-center justify-between sm:h-10 lg:justify-start`}
      >
        <div css={tw`flex items-center flex-grow flex-shrink-0 lg:flex-grow-0`}>
          <div css={tw`flex items-center justify-between w-full md:w-auto`}>
            <Link to="/" aria-label="Home">
              <span
                css={tw`text-4xl tracking-tight leading-10 font-extrabold text-pink-800 sm:text-5xl sm:leading-none md:text-6xl`}
              >
                Eurowings
              </span>
            </Link>
          </div>
        </div>
        <div css={tw`hidden md:block md:ml-10 md:pr-4`}>
          <Link
            to="/"
            css={tw`font-medium text-gray-900 hover:text-pink-600 transition duration-150 ease-in-out`}
          >
            Home
          </Link>
          <Link
            to="/PriceOffers"
            css={tw`ml-8 font-medium text-gray-900 hover:text-pink-600 transition duration-150 ease-in-out`}
          >
            PriceOffers
          </Link>
        </div>
      </nav>
    </div>
  );
};
