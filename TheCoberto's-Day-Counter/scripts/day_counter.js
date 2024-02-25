import { world, system } from "@minecraft/server";

world.afterEvents.worldInitialize.subscribe(
    (data) => {
        system.runInterval(
            (e) => {
                if (world.getTimeOfDay() == 0)
                {
                    world.sendMessage("Day: " + world.getDay());
                    system.clearRun(e)
                };
            },
        )
    }
)