import sys
import json
import ast
#import openpyxl

class WorkOrder:

    def __init__(self, workOrder):
        self.workOrder= workOrder
    
    def __create__(self):
        print("Creating a work order for PN:", self.workOrder['part_number'])



#data_back = "im python"

input_data = json.loads(sys.argv[1])

workOrder = input_data['workOrder']

part_number = workOrder['part_number']
serial_number = workOrder['serial_number']
customer = workOrder['customer']
tools = workOrder['tools']


processor = WorkOrder(workOrder)
processor.__create__()

# output1 = json.dumps({"tools": tools})


print("It was a success.")



sys.stdout.flush()