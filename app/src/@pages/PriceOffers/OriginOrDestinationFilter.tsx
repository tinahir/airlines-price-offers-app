/** @jsxImportSource @emotion/react */
import { FC, PropsWithChildren } from 'react';
import { Select } from '@palette';
import { UseQueryResult } from 'react-query';

type Props = {
  css?: string;
  useQueryResult: UseQueryResult<string[], unknown>;
  onChange?: (event: React.FormEvent<HTMLSelectElement>) => void;
};

const OriginOrDestinationFilter: FC<PropsWithChildren<Props>> = ({
  useQueryResult,
  onChange,
}) => {
  const { data, isLoading } = useQueryResult;

  return (
    <Select
      onChange={(event) => {
        if (!onChange) {
          return;
        }
        onChange(event);
      }}
    >
      <option value="">{!isLoading ? 'All' : ' Loading...'}</option>
      {data &&
        data.map((t) => {
          return (
            <option key={t} value={t}>
              {t}
            </option>
          );
        })}
    </Select>
  );
};

export { OriginOrDestinationFilter };
