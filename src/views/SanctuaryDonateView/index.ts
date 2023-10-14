import { withSuspense } from "@/composables";
import SanctuaryDonateView from "./SanctuaryDonateView.vue";

export default withSuspense(SanctuaryDonateView, ["id"]);