import Content from 'components/content/Content';
import ContentTitle from 'components/contentTitle/ContentTitle';
import { useParams } from 'react-router';
import S from './VehicleDetailStyle';

const VehicleDetail = ({ carList, isLoading }: any) => {
  const params = useParams();
  const { id } = params;
  const DetailIndex = Number(id) - 1;
  const oneNestedData = carList?.payload[DetailIndex];
  const twoNestedData = oneNestedData?.attribute;
  const insuranceData = oneNestedData?.insurance;

  console.log(isLoading);
  // find 인덱스 사용하면 됨.
  // router로 스테이트를 받음? useLocation

  return (
    <S.Container>
      <S.DetailImg src={twoNestedData?.imageUrl} />
      <div>{twoNestedData?.brand}</div>
      <div>{twoNestedData?.name}</div>
      <ContentTitle title="차량 정보" />
      <Content segment={twoNestedData?.segment} />
      <Content fuelType={twoNestedData?.fuelType} />
      <Content startDate={oneNestedData?.startDate} />
      <ContentTitle title="보험" />
      {insuranceData?.map((element: any, inx: number) => (
        <Content key={inx} insurance={element} />
      ))}
      <ContentTitle title="추가상품" />
      <Content />
    </S.Container>
  );
};

export default VehicleDetail;
