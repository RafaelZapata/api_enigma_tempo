import cardRoutes from "./CardRoutes.js";
import heroRoutes from "./HeroRoutes.js";
import rarityRoutes from "./RarityRoutes.js";
import typesRoutes from "./TypeRoutes.js";
import userRoutes from "./UserRoutes.js";

export default function applyRoutes(app)
{
    cardRoutes(app);
    rarityRoutes(app);
    userRoutes(app);
    heroRoutes(app);
    typesRoutes(app);
}