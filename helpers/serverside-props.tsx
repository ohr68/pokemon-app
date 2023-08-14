import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const getPublicConfigs = (context: GetServerSidePropsContext) => {
    return {
        REACT_APP_API_BASE_URL: process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL,
    }
}

const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const publicConfigs = getPublicConfigs(context);

    return {
        props: publicConfigs,
    }
}

export default getServerSideProps;