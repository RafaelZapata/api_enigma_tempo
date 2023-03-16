import cardRoutes from "./CardRoutes.js";
import classRoutes from "./ClassRoutes.js";
import deckRoutes from "./DeckRoutes.js";
import heroRoutes from "./HeroRoutes.js";
import matchRoutes from "./MatchRoutes.js";
import rarityRoutes from "./RarityRoutes.js";
import subclassRoutes from "./SubclassRoutes.js";
import typesRoutes from "./TypeRoutes.js";
import userRoutes from "./UserRoutes.js";

export default function applyRoutes(app)
{
    cardRoutes(app);
    rarityRoutes(app);
    userRoutes(app);
    heroRoutes(app);
    typesRoutes(app);
    deckRoutes(app);
    matchRoutes(app);
    classRoutes(app);
    subclassRoutes(app);
}