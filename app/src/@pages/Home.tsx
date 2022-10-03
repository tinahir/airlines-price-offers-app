/** @jsxImportSource @emotion/react */
import React from 'react';
import tw from 'twin.macro';
import LinkButton from '@palette/elements/LinkButton';

const Home: React.FunctionComponent<React.PropsWithChildren<unknown>> = () => {
  return (
    <main
      css={tw`mt-32 mx-auto max-w-screen-xl px-4 sm:mt-32 sm:px-6 md:mt-16 lg:mt-20 lg:px-8`}
    >
      <div css={tw`text-center lg:text-left`}>
        <h2
          css={tw`text-4xl tracking-tight leading-10 font-extrabold text-pink-900 sm:text-5xl sm:leading-none md:text-6xl`}
        >
          Airlines <br css={tw`xl:hidden`} />
          <span css={tw`text-pink-600`}>price offers</span>
        </h2>
        <div css={tw`mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start`}>
          <LinkButton url="/PriceOffers">Browse price offers </LinkButton>
        </div>
      </div>
    </main>
  );
};

export { Home };
