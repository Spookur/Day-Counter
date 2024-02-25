import { world, system } from "@minecraft/server";

world.afterEvents.worldInitialize.subscribe(() => 
    system.runInterval(() =>
        world.getTimeOfDay() == 0 && system.runInterval(e => {
            world.sendMessage("Day: " + world.getDay());
                system.clearRun(e);
        })
    )
)