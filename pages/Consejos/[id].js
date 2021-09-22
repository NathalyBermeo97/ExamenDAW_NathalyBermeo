import { useRouter } from "next/router";

const AdviceDetailPage = () => {
    const router = useRouter();
    console.log('router', router.query);

    const {id} = router.query;
    console.log('id',id);
};
export default AdviceDetailPage;