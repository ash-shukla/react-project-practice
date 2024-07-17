|__ I have used Ant Design as the UI library for this project with version as "5.19.2".

|__ I have deleted the node_modules files to reduce the size of the final bundled project

|__ Therefore to initiate the project you need to first run "npm install" to get synced to the package.json

|__ Since there were about 130+ columns so, to optimize the frontend loading I had loaded the first 10 columns initially
    |__ Interfaces are created inside path "/src/interfaces" folder

    |__ I have also created custom hook for this project to reduce the code complexity which
       can be found in "src/custom-hooks" folder.

    |__ The json data which was provided by you is into "assets" folder named as "tableData.ts"

    |__ I have also created a common method inside the folder "src/common" named as "ConvertToTitle"
        that generates a title based on column which is in camel casing

|__ To get other columns in the screens there is a button named as "Show Hide Column" to Show/Hide any columns as per you requirement

|__ There is also a button named as "Reset Column Configuration" to get back to default state of columns ie; table with 10 columns

|__ Sorting is implemented for the DataIndex which has type of "number"

|__ I have tried to optimize the rendering process of this application by making use of useCallback and useMemo hook

Thank You!
