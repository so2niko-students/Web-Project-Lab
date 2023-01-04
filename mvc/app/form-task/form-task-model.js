export class FormTaskModel{
    regExpName = /^[\w\s]{2,30}$/i;
    checkName = name => {
        return this.regExpName.test(name.trim());
    }

    checkData = ({name, description}) => {
        const isDescription = !!description.trim().length;
        const isName = this.checkName(name);
        
        return {
            total : isDescription && isName,
            inputs : [
                {
                    name : 'description',
                    value : isDescription
                }, 
                {
                    name : 'name',
                    value : isName
                }
            ]
        };
    }
}