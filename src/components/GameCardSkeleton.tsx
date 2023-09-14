import { Card, CardBody, Skeleton } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card width='300px' borderRadius='10px' overflow='hidden'>
        <Skeleton height='200px'/>
        <CardBody>
            <Skeleton/>
        </CardBody>

    </Card>
  )
}

export default GameCardSkeleton