"use client";

import Layout from "@/components/layout/Layout";
import BannerForm from "@/components/banners/BannerForm";

interface EditBannerPageProps {
  params: { id: string };
}

const EditBannerPage: React.FC<EditBannerPageProps> = ({ params }) => {
  return (
    <Layout title="배너 수정">
      <BannerForm mode="edit" bannerId={params.id} />
    </Layout>
  );
};

export default EditBannerPage;
