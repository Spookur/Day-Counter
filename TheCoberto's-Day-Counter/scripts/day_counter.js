import { world, system, Player } from "@minecraft/server";

world.afterEvents.worldInitialize.subscribe(
    (data) => {
        if (!world.getDynamicProperty("daysCount"))
            world.setDynamicProperty("daysCount", 1);
        system.runInterval(
            () => {
                if (world.getTimeOfDay() == 0)
                {
                    world.setDynamicProperty("daysCount", world.getDynamicProperty("daysCount") + 1)

                    let e = system.runInterval(() => {
                        world.sendMessage("Day: " + world.getDynamicProperty("daysCount"));
                        system.clearRun(e)
                    })
                };
            },
        )
    }
)