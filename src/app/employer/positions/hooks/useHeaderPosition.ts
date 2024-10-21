//@3rd Party
import { useParams, useRouter } from 'next/navigation';
//__________________________________________________________________

export function useHeaderPosition() {
  const { push: navigateTo } = useRouter();
  const params = useParams();

  const applicantId = params?.applicantId;
  const positionId = params?.positionId;

  const handleNavigation = () => {
    if (params?.applicantId) {
      navigateTo(`/employer/positions/${params?.positionId}`);
    } else {
      navigateTo(`/employer/positions`);
    }
  };
  return { handleNavigation, applicantId, positionId };
}
