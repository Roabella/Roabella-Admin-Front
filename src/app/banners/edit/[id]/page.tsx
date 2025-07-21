"use client";

import { useParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import BannerForm from "@/components/banners/BannerForm";

const EditBannerPage: React.FC = () => {
  const params = useParams();
  const id = params.id as string;

  return (
    <Layout title="배너 수정">
      <BannerForm mode="edit" bannerId={id} />
    </Layout>
  );
};

export default EditBannerPage;
