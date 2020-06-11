import React from 'react';

import { IHit } from '../../config/definitions';
import Icon from '../../utils/Icon';
import { useData } from '../../hooks/useData';
import {
  HitsItem, HitsItemContent, HitsItemDescr, HitsItemImage, HitsItemMain,
  HitsItemName, HitsItemPrice, SectionTitle, HitsWrapper, EmptyResult
} from './styles';

/**
 * Hits component
 */
const Hits: React.FC = () => {
  const { hits } = useData();

  return (
    <>
      <SectionTitle>Хиты продаж</SectionTitle>
      {!hits.length ? (
        <EmptyResult>Загрузка...</EmptyResult>
      ) : (
        <HitsWrapper>
          {hits.map((hit: IHit, index: number) => (
            <HitsItem key={`hit-${index}`}>
              <HitsItemImage>
                <a href="#">
                  <img src={hit.ProductImage} alt={hit.ProductName} />
                </a>
              </HitsItemImage>
              <HitsItemMain>
                <HitsItemContent>
                  <HitsItemName>
                    <a href="#">{hit.ProductName}</a>
                  </HitsItemName>
                  <HitsItemDescr>
                    {hit.ProductDescription}
                  </HitsItemDescr>
                </HitsItemContent>
                <HitsItemPrice>
                  {hit.ProductPrice}
                  <Icon icon="ruble-sign" className="text-base ml-1" />
                </HitsItemPrice>
              </HitsItemMain>
            </HitsItem>
          ))}
        </HitsWrapper>
      )}
    </>
  );
};

export default Hits;
