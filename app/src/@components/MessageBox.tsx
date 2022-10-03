/** @jsxImportSource @emotion/react */
import { FC, PropsWithChildren } from 'react';
import tw from 'twin.macro';
import { Center } from '@palette/elements/Center';

const MessageBox: FC<PropsWithChildren> = ({ children }) => (
  <Center>
    <div
      css={tw`text-4xl tracking-tight leading-10 font-extrabold text-pink-900 sm:leading-none text-4xl mt-32`}
    >
      {children}
    </div>
  </Center>
);

export default MessageBox;
