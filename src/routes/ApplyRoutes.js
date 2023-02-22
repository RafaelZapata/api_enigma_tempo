import cardRoutes from "./CardRoutes.js";
import rarityRoutes from "./RarityRoutes.js";
import userRoutes from "./UserRoutes.js";

export default function applyRoutes(app)
{
    cardRoutes(app);
    rarityRoutes(app);
    userRoutes(app);
}