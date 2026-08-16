# Tailwindcss Installation Guide

Step 1: Install this two package tailwindcss @tailwindcss/vite
Step 2: then Import the tailwindcss function in the vite configuration inside the plugins
Step 3: Import the same tailwind in the entry index.css file not the sass file
Step 4: That's it just check the basics class of tailwindcss 

# Shardcn Installation Guide

Step 1: In the tsconfig.json add the alias first
Step 2: Inside the compilerOption add the <!-- path: { "@/*": "./src/*" } -->
Step 3: Inside the vite.config.ts file create a new property called resolve inside the vite config and enable to config called tsConfigPath to true
Step 4: check the import using import something in any component using the @
Step 5: install the shardcn package.
Step 6: initialise the package using the command npx shardcn@latest init