"use client";

import { useParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import AnnouncementEditForm from "@/components/announcements/AnnouncementEditForm";

const AnnouncementEditPage = () => {
  const params = useParams();
  const id = params.id as string;

  return (
    <Layout title="공지사항 수정">
      <AnnouncementEditForm id={id} />
    </Layout>
  );
};

export default AnnouncementEditPage;
